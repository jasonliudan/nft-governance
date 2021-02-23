import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'

export default function SelectDate({ showModal, setShowModal, setDateTime }) {
  const [step, setStep] = useState(0)
  const [date, onDateChange] = useState(null)
  const [time, onTimeChange] = useState(null)

  useEffect(() => {
    setStep(0)
    onDateChange(null)
    onTimeChange(null)
  }, [showModal])

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
                <div className="mt-8 mb-4 mx-8 flex justify-center">
                  {step === 0 ? (
                    <Calendar onChange={onDateChange} value={date} />
                  ) : (
                      <input
                        type="time"
                        step="1"
                        value={time ? time : ''}
                        className="form-control"
                        placeholder="Time"
                        onChange={(ev) => onTimeChange(ev.target.value)}
                      />
                    )}
                </div>
                {/*Footer*/}
                <div className="flex px-8 pb-4">
                  <div
                    className="inline-flex items-center justify-center mr-2 px-4 py-2 w-full my-1 text-base font-medium text-black border border-gray-400 rounded-full cursor-pointer whitespace-nowrap hover:border-black"
                    onClick={() => {
                      setShowModal(false)
                    }}
                  >
                    Cancel
                  </div>
                  {step === 0 ? (
                    <div
                      className={`inline-flex items-center justify-center px-4 py-2 w-full my-1 text-base font-medium text-white border rounded-full ${date ? 'cursor-pointer' : 'cursor-not-allowed'
                        }`}
                      style={{
                        backgroundColor: date ? '#5984ff' : 'lightgray',
                        borderColor: date ? '#5984ff' : 'lightgray',
                      }}
                      onClick={() => {
                        date && setStep(1)
                      }}
                    >
                      Next
                    </div>
                  ) : (
                      <div
                        className={`inline-flex items-center justify-center px-4 py-2 w-full my-1 text-base font-medium text-white border rounded-full ${time ? 'cursor-pointer' : 'cursor-not-allowed'
                          }`}
                        style={{
                          backgroundColor: time ? '#5984ff' : 'lightgray',
                          borderColor: time ? '#5984ff' : 'lightgray',
                        }}
                        onClick={() => {
                          if (time) {
                            const datetime = moment(date)
                            const timedivision = time.split(':')
                            datetime.set({
                              hour: timedivision[0],
                              minute: timedivision[1],
                            })
                            setDateTime(datetime)
                            setShowModal(false)
                          }
                        }}
                      >
                        Select
                      </div>
                    )}
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
