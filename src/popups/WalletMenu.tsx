import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isMetamaskConnected, getMetamaskAccount } from '../api/web3api'
import { setEthAddress } from '../store/actions'

function WalletMenu({ showModal, setShowModal, setEthAddress }) {
  const connectMetamask = async () => {
    let address = await isMetamaskConnected()
    if (address) setEthAddress(address)
    else address = await getMetamaskAccount()

    setEthAddress(address)
    localStorage.setItem('address', address)
    setShowModal(false)
  }

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative w-96 my-6 mx-auto max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-xl font-semibold w-full text-center">
                    Connect wallet
                  </h3>
                  <button
                    className=" bg-transparent border-0 text-black  text-1xl leading-none outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <i className="fa fa-close" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative my-4 mx-8 flex-auto">
                  <a
                    className="inline-flex items-center justify-center px-4 py-2 w-full my-1 text-base font-medium text-black border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-black"
                    onClick={() => connectMetamask()}
                  >
                    <img
                      src="/icons/metamask.png"
                      alt="metamask"
                      className="w-7 mx-2"
                    />
                    MetaMask
                  </a>
                  <a className="inline-flex items-center justify-center px-4 py-2 w-full my-1 text-base font-medium text-black border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-black">
                    <img
                      src="/icons/fortmatic.png"
                      alt="fortmatic"
                      className="w-7 mx-2"
                    />
                    Fortmatic
                  </a>
                  <a className="inline-flex items-center justify-center px-4 py-2 w-full my-1 text-base font-medium text-black border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-black">
                    <img
                      src="/icons/walletconnect.png"
                      alt="walletconnect"
                      className="w-7 mx-2"
                    />
                    WalletConnect
                  </a>
                  <a className="inline-flex items-center justify-center px-4 py-2 w-full my-1 text-base font-medium text-black border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-black">
                    <img
                      src="/icons/coinbase.png"
                      alt="coinbase"
                      className="w-7 mx-2"
                    />
                    Coinbase
                  </a>
                  <a className="inline-flex items-center justify-center px-4 py-2 w-full my-1 text-base font-medium text-black border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-black">
                    <img
                      src="/icons/torus.png"
                      alt="torus"
                      className="w-7 mx-2"
                    />
                    Torus
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(WalletMenu)
