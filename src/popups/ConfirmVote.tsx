import React from 'react'

export default function ConfirmVote({ option, showModal, setShowModal }) {
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
                                        ConfirmVote
                                    </h3>
                                    <button
                                        className=" bg-transparent border-0 text-black  text-1xl leading-none outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <i className="fa fa-close" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="m-4 mx-8 font-bold text-center">
                                    <p>Are you sure you want to vote "{option}"?</p>
                                    <p>This action cannot be undone.</p>
                                </div>
                                <div className="border rounded-md m-5 flex justify-between p-5">
                                    <div className="text-gray-600">
                                        <p>Option</p>
                                        <p>Your voting power</p>
                                    </div>
                                    <div className="text-right">
                                        <p>{option}</p>
                                        <p>MIT</p>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex justify-between p-5 border-t border-solid border-gray-300 sm:rounded-t">
                                    <button
                                        className="inline-flex items-center justify-center px-4 py-2 w-full my-1 mr-4 text-base text-blue-600 font-medium border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-blue-600"

                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="inline-flex items-center justify-center px-4 py-2 w-full my-1 text-base text-white bg-blue-600 font-medium border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-blue-600"

                                        onClick={() => setShowModal(false)}
                                    >
                                        Vote
                                    </button>
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
