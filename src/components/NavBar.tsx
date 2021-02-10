import classNames from 'classnames'
import { useState } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function NavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  const [session, loading] = useSession()
  return (
    <div className="fixed w-full top-0">
      <nav className="bg-white border-b border-lightgray-500 ">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="flex items-center justify-start flex-1 ml-12 sm:items-stretch">
              <div className="flex items-center flex-shrink-0">
                <Link href="/" passHref={true}>
                  <a>
                    <img
                      className="block w-auto h-8 lg:hidden"
                      src="https://bondly.finance/images/logo-horizontal.png"
                      alt="Workflow"
                    />
                    <span className="sr-only">Logo</span>
                  </a>
                </Link>
                <Link href="/" passHref={true}>
                  <a>
                    <img
                      className="hidden w-auto h-8 lg:block"
                      src="https://bondly.finance/images/logo-horizontal.png"
                      alt="Workflow"
                    />
                    <span className="sr-only">Logo</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                onClick={() => signIn()}
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-black border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-black"
              >
                Connect wallet
              </a>
              <a
                onClick={() => signIn()}
                className="inline-flex items-center justify-center px-4 py-2 ml-2 text-base font-medium text-black border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-black"
              >
                ?
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
