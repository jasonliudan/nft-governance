import { useState } from 'react'
import Link from 'next/link'

import WalletMenu from '../popups/WalletMenu'
import About from '../popups/About'

import { handleBodyScroll } from '../utils'

export default function NavBar() {
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [showAboutModal, setShowAboutModal] = useState(false)

  const openWalletMenu = (mode) => {
    setShowWalletModal(mode)
    handleBodyScroll(mode)
  }
  const openAbout = (mode) => {
    setShowAboutModal(mode)
    handleBodyScroll(mode)
  }
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
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-black border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-black"
                onClick={() => openWalletMenu(true)}
              >
                Connect wallet
              </a>
              <a
                className="inline-flex items-center justify-center px-4 py-2 ml-2 text-base font-medium text-black border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-black"
                onClick={() => openAbout(true)}
              >
                ?
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <WalletMenu
          showModal={showWalletModal}
          setShowModal={() => openWalletMenu(false)}
        />
        <About
          showModal={showAboutModal}
          setShowModal={() => openAbout(false)}
        />
      </div>
    </div>
  )
}
