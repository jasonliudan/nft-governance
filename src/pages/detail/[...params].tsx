import { NavBar } from '@/components'
import { ReactNode, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton';

import { getProposals } from '../../store/actions'

import Create from './create'
import ProposalDetail from './proposal'

import TabView from '../../components/TabView'
import ProposalCard from '../../components/ProposalCard'
import 'font-awesome/css/font-awesome.min.css'

function SpaceDetail({ ethAddress, proposals, getProposals }) {
  const router = useRouter()
  const params = router.query.params

  const id = params[0]
  const filter = params[1]

  const tabData = [
    {
      id: 'all',
      text: 'All',
    },
    {
      id: 'active',
      text: 'Active',
    },
    {
      id: 'closed',
      text: 'Closed',
    },
  ]

  useEffect(() => {
    getProposals()
  }, [])

  if (filter === 'create') return <Create />
  if (filter === 'proposal') return <ProposalDetail id={id} />

  let filteredProposals = []
  if (proposals) {
    switch (filter) {
      case 'all':
        filteredProposals = proposals
        break
      case 'active':
        filteredProposals = proposals.filter(proposal => moment(proposal.end).diff(moment()) > 0)
        break
      case 'closed':
        filteredProposals = proposals.filter(proposal => moment(proposal.end).diff(moment()) <= 0)
        break
      default:
        break
    }
  }

  return (
    <div className="divide-y divide-gray-100">
      <main>
        <div className="px-0 py-5 sm:px-20">
          <div className="flex justify-between sm:mb-6">
            <div className='px-4 sm:px-0'>
              <div className="text-gray-500 cursor-pointer">
                <span>{id}</span>
              </div>
              <h1 className="mb-4 text-3xl font-bold text-blue-600">Proposals</h1>
            </div>
            {ethAddress && (
              <Link href={`/detail/${id}/create`} passHref={true}>
                <a className="hidden items-center justify-center px-4 py-2 mt-4 h-12 text-base font-medium text-blue-600 border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-blue-600 sm:inline-flex">
                  New Proposal
                </a>
              </Link>
            )}
          </div>
          {proposals ?
            <div>
              <TabView
                options={tabData}
                selectedId={filter}
                onTabChanged={(selectedFilter) =>
                  Router.push({
                    pathname: `/detail/${id}/${selectedFilter}`,
                  })
                }
              />
              {
                filteredProposals.map((proposal, index) =>
                  <ProposalCard proposal={proposal} id={id} key={index} />)}
            </div> :
            <div>
              <Skeleton count={5} />
            </div>}
        </div>
      </main>
    </div>
  )
}

function DetailPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="px-0 mx-auto max-w-7xl sm:px-6 lg:px-8 my-20 sm:px-2">
        {children}
      </div>
    </>
  )
}

SpaceDetail.layoutProps = {
  meta: {
    title: 'Setup',
  },
  Layout: DetailPageLayout,
}

const mapStateToProps = (state) => ({
  ethAddress: state.connectionReducer.ethAddress,
  proposals: state.proposalReducer.proposals
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getProposals: () => getProposals(),
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(SpaceDetail)
