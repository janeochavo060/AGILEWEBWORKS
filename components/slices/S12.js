import React, { useState, useEffect } from 'react';
import Image from 'next/image'
export default function S12 ({ }) {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0 bg-gradient-to-r from-sky-600 via-blue-600 to-teal-700 background-animate lg:p-0 p-4'>
        <div className='flex md:flex-row flex-col justify-between items-center xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full relative'>
          <div>
            <Image
              src="/images/stock/agile.png"
              alt="image"
              width={600}
              height={450}
            />
          </div>
          <div className='flex flex-col justify-center items-center md:m-0 m-12'>
            <div className='lg:text-[75px] text-[35px] font-bold text-white '>
              {`Introducing Halcyon Agile.`}
            </div>
            <div className='flex flex-col md:w-[800px] w-full'>
              <div
                className={`
                  text-center text-white text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline
                  `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam leo, lacinia porta tincidunt et, tempus et mi. Nullam congue viverra augue, quis tristique felis luctus ut.
              </div>
            </div>
            <div className='my-4'>
              <button
                className='flex justify-between items-center  text-lg font-bold transition ease-in-out delay-150 bg-transparent border-t-4 border-b-4 border-r-4 border-white hover:bg-blue-500 hover:to-blue-500 hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full text-white cursor-pointer'
                onClick={() => {}}
              >
                <Image
                  src="/svg/play.svg"
                  alt="Arrow right"
                  className=''
                  width={60}
                  height={60}
                />
                <span className='mx-4'>Click to Play Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}