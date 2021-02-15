import { NavBar } from '@/components'
import { ReactNode, useState } from 'react'
import Link from 'next/link'
import 'font-awesome/css/font-awesome.min.css'

export default function CreateSpace() {
  return (
    <div className="divide-y divide-gray-100">
      <main>
        <div className="px-20 py-5">
          <Link href="/" passHref={true}>
            <div className="text-gray-500 cursor-pointer hover:text-black">
              <i className="fa fa-arrow-left"></i>&nbsp;&nbsp;
              <span>Home</span>
            </div>
          </Link>
          <h1 className="my-4 text-3xl font-bold">Create a space</h1>
          <div className="border rounded-md" style={{ maxWidth: '600px' }}>
            <div className="p-6">
              <p className="text-gray-500">
                Use an existing ENS name to create your space on.
              </p>
              <div className="inline-flex justify-center w-full my-4 px-4 py-2 outline-none text-base font-medium text-black border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-black">
                <input
                  className="outline-none bg-transparent mx-2 w-full"
                  placeholder="e.g. yam.eth"
                  //                  value={searchText}
                />
                <i className="fa fa-info" style={{ lineHeight: '25px' }} />
              </div>
              <div className="w-full px-4 py-2 bg-gray-300 flex font-medium text-black border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-black">
                <span className="w-full text-center">Next</span>
                <i className="fa fa-info" style={{ lineHeight: '25px' }} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function CreateSpaceLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 my-20">
        {children}
      </div>
    </>
  )
}

CreateSpace.layoutProps = {
  meta: {
    title: 'Setup',
  },
  Layout: CreateSpaceLayout,
}
