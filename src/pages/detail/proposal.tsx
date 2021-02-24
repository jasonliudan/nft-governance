import { NavBar } from '@/components'
import { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'

import 'font-awesome/css/font-awesome.min.css'
import { decodeHash, decryptSignatrue } from '../../utils'

import { createProposal } from '../../store/actions'

function ProposalDetail({ }) {
    const [proposal, setProposal] = useState(null)
    const [selectedChoice, setSelectedChoice] = useState(null)

    const router = useRouter()
    const params = router.query.params

    const id = params[0]
    const hash = params[2]
    useEffect(() => {
        async function retrieveData() {
            const data = await decodeHash(hash)
            setProposal(data)
        }
        retrieveData()
    }, [])

    //Get Data
    let address = null
    if (proposal) {
        const proposalObj = {
            name: proposal.name,
            body: proposal.body,
            start: proposal.start,
            end: proposal.end,
            snapshot: proposal.snapshot,
            choices: proposal.choices
        }
        address = decryptSignatrue(JSON.stringify(proposalObj), proposal.signature)
    }
    const isProposalClosed = proposal ? moment(proposal.end).diff(moment()) > 0 ? false : true : false
    return (
        <div className="divide-y divide-gray-100">
            <main>
                <div className="px-20 py-5">
                    <Link href={`/detail/${id}/all`} passHref={true}>
                        <div className="text-gray-500 cursor-pointer mb-4 hover:text-black">
                            <i className="fa fa-arrow-left"></i>&nbsp;&nbsp;
                                 <span>{id}</span>
                        </div>
                    </Link>
                    {proposal &&
                        <div className="flex">
                            <div className="w-full pr-4">
                                <div>
                                    <h1 className='text-3xl font-bold'>{proposal.name}</h1>
                                    <div className={`w-min text-white px-2 py-1 mt-2 rounded-full text-sm ${isProposalClosed ? 'bg-indigo-600' : 'bg-green-500'}`}>
                                        {isProposalClosed ? 'Closed' : 'Active'}
                                    </div>
                                    <div className='text-xl mt-8'>{proposal.body}</div>
                                </div>
                                <div className='mt-8'>
                                    <div className="w-full border-0 rounded-lg border relative flex flex-col bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex justify-between px-8 py-4 border-b border-solid border-gray-300 rounded-t">
                                            <h3 className="text-lg font-semibold w-full">Cast your vote</h3>
                                        </div>
                                        {/*body*/}
                                        <div className="p-4">
                                            {proposal.choices.map((choice, index) => (
                                                <div className="relative my-2 mx-8 flex-auto" key={index}
                                                    onClick={() => setSelectedChoice(index)}>
                                                    <div className={`inline-flex justify-center w-full m-5 px-4 py-2 outline-none text-base font-medium text-black border 
                                                    ${index === selectedChoice ? 'border-blue-600' : 'border-lightgray-500'} rounded-full cursor-pointer whitespace-nowrap hover:border-blue-600 sm:m-0`}>
                                                        {choice}
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="mx-8 mt-4">
                                                <button
                                                    className="inline-flex justify-center w-full px-4 py-2 outline-none text-base font-medium text-white border border-none outline-none rounded-full cursor-pointer whitespace-nowrap hover:border-black"
                                                    style={{ backgroundColor: '#5984ff' }}
                                                >
                                                    Vote
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-80 border-0 rounded-lg border relative flex flex-col bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex justify-between px-8 py-4 border-b border-solid border-gray-300 rounded-t">
                                        <h3 className="text-xl font-semibold w-full">Information</h3>
                                    </div>
                                    {/*body*/}
                                    <div className="relative my-4 mx-8 flex-auto">
                                        <div className='flex justify-between'>
                                            <p>Author</p>
                                            <p>{address.substring(0, 6)}...{address.substring(address.length - 4, address.length)}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p>Start date</p>
                                            <p>{moment(proposal.start).format('lll')}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p>End date</p>
                                            <p>{moment(proposal.end).format('lll')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
            </main>
        </div>
    )
}

function ProposalDetailLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <NavBar />
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 my-20">
                {children}
            </div>
        </>
    )
}

ProposalDetail.layoutProps = {
    meta: {
        title: 'Setup',
    },
    Layout: ProposalDetailLayout,
}


const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            createProposal: (proposal) => createProposal(proposal),
        },
        dispatch
    )

export default connect(null, mapDispatchToProps)(ProposalDetail)