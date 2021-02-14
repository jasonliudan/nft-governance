import { NavBar } from '@/components'
import { ReactNode, useState } from 'react'
import Link from 'next/link'

import SpaceCard from '../components/SpaceCard'
import { spaces } from '../data/data'
import 'font-awesome/css/font-awesome.min.css'

export default function Home() {
  const [searchText, setSearchText] = useState('')

  return (
    <div className="divide-y divide-gray-100">
      <main>
        <div className="px-0 py-0 sm:px-20 sm:py-5">
          <div className="flex justify-between sm:mb-6">
            <div className="inline-flex justify-center w-full m-5 px-4 py-2 outline-none text-base font-medium text-black border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-black sm:w-auto sm:m-0">
              <i className="fa fa-search my-1" />
              <input
                className="outline-none bg-transparent mx-2 w-full sm:w-auto"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {searchText.length > 0 && (
                <i
                  className="fa fa-close my-1"
                  onClick={() => setSearchText('')}
                />
              )}
            </div>
            <Link href="/setup" passHref={true}>
              <a className="hidden items-center justify-center px-4 py-2 ml-8 text-base font-medium text-black border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-black sm:inline-flex">
                Create space
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
            {spaces.map((space, index) => (
              <SpaceCard space={space} key={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 my-20">{children}</div>
    </>
  )
}

Home.layoutProps = {
  meta: {
    title: 'Home',
  },
  Layout: HomeLayout,
}
