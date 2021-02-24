import React from 'react'

export default function About({ showModal, setShowModal }) {
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
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none sm:rounded-lg">
                {/*header*/}
                <div className="flex justify-between p-5 border-b border-solid border-gray-300 sm:rounded-t">
                  <h3 className="text-xl font-semibold w-full text-center text-blue-600">
                    About
                  </h3>
                  <button
                    className=" bg-transparent border-0 text-black  text-1xl leading-none outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <i className="fa fa-close" />
                  </button>
                </div>
                {/*body*/}
                <div className="mt-8 mb-4 mx-8 flex justify-center ">
                  <a href='https://twitter.com/bondlyfinance' target="_blank">
                    <i
                      className="fa fa-twitter mx-3 cursor-pointer"
                      style={{ fontSize: '26px' }}
                    ></i>
                  </a>
                  <a href='https://discord.com/invite/5AkCCuw' target="_blank">
                    <img
                      src="/icons/discord.png"
                      alt="discord"
                      className="w-7 mx-3 cursor-pointer"
                    />
                  </a>
                  <a href='https://t.me/bondlyfinance' target="_blank">
                    <i
                      className="fa fa-telegram mx-3 cursor-pointer"
                      style={{ fontSize: '26px' }}
                    ></i>
                  </a>
                </div>
                <div className="border rounded-md m-5 flex justify-between p-5">
                  <div className="text-gray-600">
                    <p>Version</p>
                    <p>License</p>
                    <p>IPFS server</p>
                  </div>
                  <div className="text-right">
                    <p>0.1.0#</p>
                    <p>MIT</p>
                    <p>ipfs.infura.io</p>
                  </div>
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
