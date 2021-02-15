import { NavBar } from '@/components'
import { ReactNode, useState } from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import 'font-awesome/css/font-awesome.min.css'

import SelectDate from '../../popups/SelectDate'

import { handleBodyScroll } from '../../utils'

export default function CreateProposal() {
  const [question, setQuestion] = useState('')
  const [content, setContent] = useState('')
  const [choices, setChoices] = useState(['', ''])
  const [startDateTime, setStartDateTime] = useState(null)
  const [endDateTime, setEndDateTime] = useState(null)
  const [blockNumber, setBlockNumber] = useState('')

  //Popup Status
  const [showStartCalendarModal, setShowStartCalendarModal] = useState(false)
  const [showEndCalendarModal, setEndStartCalendarModal] = useState(false)

  const openStartCalendarModal = (mode) => {
    setShowStartCalendarModal(mode)
    handleBodyScroll(mode)
  }
  const openEndCalendarModal = (mode) => {
    setEndStartCalendarModal(mode)
    handleBodyScroll(mode)
  }

  const router = useRouter()
  const params = router.query.params

  const id = params[0]

  return (
    <div className="divide-y divide-gray-100">
      <main>
        <div className="px-20 py-5">
          <Link href={`/detail/${id}/all`} passHref={true}>
            <div className="text-gray-500 cursor-pointer mb-4 hover:text-black">
              <i className="fa fa-arrow-left"></i>&nbsp;&nbsp;
              <span>{id}</span>
            </div>
          </Link>
          <div className="flex">
            <div className="w-full pr-4">
              <input
                className="outline-none w-full mb-2 text-4xl font-semibold"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <textarea
                rows={5}
                className="outline-none border-0 w-full text-xl p-0 resize-none"
                style={{ boxShadow: 'none' }}
                placeholder="What is your proposal?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div>
                <div className="w-full border-0 rounded-lg border relative flex flex-col bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-between p-4 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-xl font-semibold w-full">Choices</h3>
                  </div>
                  {/*body*/}
                  <div className="p-4">
                    {choices.map((choice, key) => (
                      <div className="relative my-2 mx-8 flex-auto">
                        <div className="inline-flex justify-center w-full m-5 px-4 py-2 outline-none text-base font-medium text-black border border-lightgray-500 rounded-full cursor-pointer whitespace-nowrap hover:border-black sm:m-0">
                          <span>{key + 1}</span>
                          <input
                            className="outline-none bg-transparent mx-2 w-full text-center"
                            value={choice}
                            onChange={(e) =>
                              setChoices([
                                ...choices.slice(0, key),
                                e.target.value,
                                ...choices.slice(key + 1),
                              ])
                            }
                          />
                          <i
                            className="fa fa-close my-1"
                            onClick={() =>
                              setChoices(
                                choices.filter((choice, index) => index !== key)
                              )
                            }
                          />
                        </div>
                      </div>
                    ))}
                    <div className="mx-8 mt-4">
                      <button
                        className="inline-flex justify-center w-full px-4 py-2 outline-none text-base font-medium text-black border border-lightgray-500 outline-none rounded-full cursor-pointer whitespace-nowrap hover:border-black"
                        onClick={() =>
                          setChoices([...choices.slice(0, choices.length), ''])
                        }
                      >
                        Add Choice
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-80 border-0 rounded-lg border relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-4 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-xl font-semibold w-full">Actions</h3>
                </div>
                {/*body*/}
                <div className="relative my-4 mx-8 flex-auto">
                  <div
                    className="w-full overflow-hidden overflow-ellipsis text-center px-4 py-2 my-1 text-base font-medium text-black border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-black"
                    onClick={() => openStartCalendarModal(true)}
                  >
                    {startDateTime
                      ? startDateTime.format('LLL')
                      : 'Select start date'}
                  </div>
                  <div
                    className="inline-flex items-center justify-center px-4 py-2 w-full my-1 text-base font-medium text-black border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-black"
                    onClick={() => openEndCalendarModal(true)}
                  >
                    {endDateTime
                      ? endDateTime.format('LLL')
                      : 'Select start date'}
                  </div>
                  <input
                    className="text-center px-4 py-2 w-full my-1 text-base font-medium text-black border border-gray-400 rounded-full outline-none"
                    placeholder="Snapshot block number"
                    value={blockNumber}
                    onChange={(e) => setBlockNumber(e.target.value)}
                  />
                  <div
                    className="inline-flex items-center justify-center px-4 py-2 w-full my-1 text-base font-medium border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-black"
                    style={{ color: '#ff3856' }}
                  >
                    Publish
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* PopUps */}
      <div>
        <SelectDate
          showModal={showStartCalendarModal}
          setShowModal={() => openStartCalendarModal(false)}
          setDateTime={(datetime) => setStartDateTime(datetime)}
        />
        <SelectDate
          showModal={showEndCalendarModal}
          setShowModal={() => openEndCalendarModal(false)}
          setDateTime={(datetime) => setEndDateTime(datetime)}
        />
      </div>
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
