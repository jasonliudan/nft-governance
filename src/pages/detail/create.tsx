import { NavBar } from '@/components'
import { ReactNode, useState } from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import 'font-awesome/css/font-awesome.min.css'

export default function CreateProposal() {
  const router = useRouter()
  const params = router.query.params

  const id = params[0]
  const filter = params[1]

  return (
    <div className="divide-y divide-gray-100">
      <main>
        <div className="px-20 py-5">
          <Link href={`/detail/${id}/all`} passHref={true}>
            <div className="text-gray-500 cursor-pointer">
              <i className="fa fa-arrow-left"></i>&nbsp;&nbsp;
              <span>{id}</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}

function CreateProposalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 my-20">
        {children}
      </div>
    </>
  )
}

CreateProposal.layoutProps = {
  meta: {
    title: 'Setup',
  },
  Layout: CreateProposalLayout,
}
