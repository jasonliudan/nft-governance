import { NavBar } from '@/components'
import { ReactNode, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import 'font-awesome/css/font-awesome.min.css'

export default function Home() {
  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/') {
      Router.push('/detail/bondly.finance/all')
    }
  });

  return (
    <div className="divide-y divide-gray-100">
      <main>
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
