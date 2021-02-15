import { NavBar } from '@/components'
import { ReactNode, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'

import Create from './create'
import TabView from '../../components/TabView'
import 'font-awesome/css/font-awesome.min.css'

export default function SpaceDetail() {
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
      id: 'core',
      text: 'Core',
    },
    {
      id: 'community',
      text: 'Community',
    },
    {
      id: 'active',
      text: 'Active',
    },
    {
      id: 'pending',
      text: 'Pending',
    },
    {
      id: 'closed',
      text: 'Closed',
    },
  ]

  if (filter === 'create') return <Create />
  return (
    <div className="divide-y divide-gray-100">
      <main>
        <div className="px-20 py-5">
          <div className="flex justify-between sm:mb-6">
            <div>
              <div className="text-gray-500 cursor-pointer">
                <span>{id}</span>
              </div>
              <h1 className="mb-4 text-3xl font-bold">Proposals</h1>
            </div>
            <Link href={`/detail/${id}/create`} passHref={true}>
              <a className="hidden items-center justify-center px-4 py-2 mt-4 h-12 text-base font-medium text-black border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-black sm:inline-flex">
                New Proposal
              </a>
            </Link>
          </div>
          <TabView
            options={tabData}
            selectedId={filter}
            onTabChanged={(selectedFilter) =>
              Router.push({
                pathname: `/detail/${id}/${selectedFilter}`,
              })
            }
          />
        </div>
      </main>
    </div>
  )
}

function DetailPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 my-20">
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
