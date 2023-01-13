import React, { useState, useEffect } from 'react';

const ContactForm = ({}) => {
  const [form, setForm] = useState({});
  return (
    <>
      <div className="flex items-center justify-center  xl:mx-0 lg:m-8 m-8 bg-white md:p-12 p-6 shadow-xl">
        <div className="flex flex-col items-center xxl:max-w-[600px] xl:max-w-[600px]">
          <div className="md:text-[60px] md:leading-[60px] text-2xl font-bold my-4">
            {`Let's Talk!`}
          </div>
          <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row xl:space-x-4 lg:space-x-4 md:space-x-4 sm:space-x-4 space-x-0">
                <div className="xl:w-1/2 lg:w-1/2 md:1/2 sm:1/2 w-full mb-4">
                  <input
                    name="name"
                    size="50"
                    type="text"
                    value={form.name}
                    placeholder="Name*"
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full md:p-[18px] p-[14px] focus:outline-none focus:bg-white focus:border-black md:text-[19px] text-[14px] leading-[28px] border-b-2"
                  />
                </div>
                <div className="xl:w-1/2 lg:w-1/2 md:1/2 sm:1/2 w-full mb-4 w-full mb-4 my-0">
                  <input
                    name="email"
                    size="120"
                    type="text"
                    value={form.email}
                    placeholder="E-Mail Address*"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full md:p-[18px] p-[14px] focus:outline-none focus:bg-white focus:border-black md:text-[19px] text-[14px] leading-[28px] border-b-2"
                  />
                </div>
              </div>
              <div className="flex flex-col  xl:flex-row lg:flex-row md:flex-row sm:flex-row xl:space-x-4 lg:space-x-4 md:space-x-4 sm:space-x-4 space-x-0">
                <div className="xl:w-1/2 lg:w-1/2 md:1/2 sm:1/2 w-full mb-4">
                  <input
                    name="state"
                    size="50"
                    type="text"
                    value={form.state}
                    placeholder="State/City*"
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                    className="w-full md:p-[18px] p-[14px] focus:outline-none focus:bg-white focus:border-black md:text-[19px] text-[14px] leading-[28px] border-b-2"
                  />
                </div>
                <div className="xl:w-1/2 lg:w-1/2 md:1/2 sm:1/2 w-full mb-4">
                  <input
                    name="phone"
                    size="50"
                    type="text"
                    value={form.phone}
                    placeholder="Phone*"
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full md:p-[18px] p-[14px] focus:outline-none focus:bg-white focus:border-black md:text-[19px] text-[14px] leading-[28px] border-b-2"
                  />
                </div>
                
              </div>
              <div className="w-full pb-3 md:pb-0">
                <input
                  name="message"
                  type="textarea"
                  cols={50}
                  rows={4}
                  value={form.message}
                  placeholder="Message*"
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                  }}
                  className="w-full md:p-[18px] p-[14px] focus:outline-none focus:bg-white focus:border-black md:text-[19px] text-[14px] leading-[28px] border-b-2"
                />
              </div>
              <div className='flex justify-center mt-12'>
                <button
                  className='flex md:text-2xl  text-sm md:px-24 px-12 py-4 transition ease-in-out delay-150 bg-sky-400 hover:bg-blue-500 hover:to-blue-500 hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full text-white cursor-pointer'
                  onClick={() => {}}
                >
                  <span>Submit</span>
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactForm