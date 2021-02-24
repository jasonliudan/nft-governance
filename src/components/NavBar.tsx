import { useState, useEffect } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WalletMenu from '../popups/WalletMenu'
import AccountInfo from '../popups/Account'
import About from '../popups/About'

import { setEthAddress } from '../store/actions'

import { handleBodyScroll } from '../utils'

function NavBar({ ethAddress, setEthAddress }) {
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [showAccountModal, setShowAccountModal] = useState(false)
  const [showAboutModal, setShowAboutModal] = useState(false)

  useEffect(() => {
    if (localStorage.address) setEthAddress(localStorage.address)
  }, [])

  const openWalletMenu = (mode) => {
    setShowWalletModal(mode)
    handleBodyScroll(mode)
  }
  const openAccountInfo = (mode) => {
    setShowAccountModal(mode)
    handleBodyScroll(mode)
  }
  const openAbout = (mode) => {
    setShowAboutModal(mode)
    handleBodyScroll(mode)
  }
  return (
    <div>
      <div className="fixed w-full top-0">
        <nav
          className="border-b border-lightgray-500"
          style={{ backgroundColor: '#2a58b5' }}
        >
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="flex items-center justify-start flex-1 sm:ml-4 sm:items-stretch sm:ml-12">
                <div className="flex items-center flex-shrink-0">
                  <Link href="/" passHref={true}>
                    <a>
                      <img
                        className="block w-auto h-8 lg:hidden"
                        src="/logo/logo-main.png"
                        alt="Workflow"
                      />
                      <span className="sr-only">Logo</span>
                    </a>
                  </Link>
                  <Link href="/" passHref={true}>
                    <a>
                      <img
                        className="hidden w-auto h-8 lg:block"
                        src="/logo/logo-main.png"
                        alt="Workflow"
                      />
                      <span className="sr-only">Logo</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div
                  className="w-40 overflow-hidden overflow-ellipsis text-center px-4 py-2 ml-8 bg-white text-base font-medium text-black border border-white text-white rounded cursor-pointer whitespace-nowrap"
                  style={{ backgroundColor: '#2a58b5' }}
                  onClick={
                    !ethAddress
                      ? () => openWalletMenu(true)
                      : () => openAccountInfo(true)
                  }
                >
                  {!ethAddress ? 'Connect wallet' : ethAddress}
                </div>
                <a
                  className="items-center justify-center px-4 py-2 ml-2 bg-white text-base overflow-ellipsis text-black border border-lightgray-500 rounded-md cursor-pointer whitespace-nowrap"
                  style={{ color: '#5984ff' }}
                  onClick={() => openAbout(true)}
                >
                  ?
              </a>
              </div>
            </div>
          </div>
        </nav>

      </div>
      <div>
        <WalletMenu
          showModal={showWalletModal}
          setShowModal={() => openWalletMenu(false)}
        />
        <AccountInfo
          showModal={showAccountModal}
          setShowModal={() => openAccountInfo(false)}
        />
        <About
          showModal={showAboutModal}
          setShowModal={() => openAbout(false)}
        />
      </div></div>
  )
}

const mapStateToProps = (state) => ({
  ethAddress: state.connectionReducer.ethAddress,
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setEthAddress: (ethAddress) => setEthAddress(ethAddress),
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
