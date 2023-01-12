import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
export default function S5 ({slice}) {
  return (
    <div className='flex my-8 mr-8'>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0 bg-sky-700 '>
        <div className='flex md:flex-row flex-col justify-between items-center xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full relative'>
          <div className='relative items-center md:w-[600px] md:h-[400px] w-[320px] h-[200px] m-4'>
            <Image
              src={'/images/stock/stock1.jpg'}
              alt="image"
              className=' rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md'
              fill
            />
          </div>
          <div className='flex flex-col justify-center items-start p-4'>
            <div className='lg:text-[30px] text-[35px] font-bold text-white'>
              {`In service for 10 years`}
            </div>
            <div className='flex flex-col md:w-[600px] w-ful'>
              <div
                className={`
                  text-white text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline
                  `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam leo, lacinia porta tincidunt et, tempus et mi. Nullam congue viverra augue, quis tristique felis luctus ut.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:block hidden triangle-dark-blue"/>
    </div>
    
  )
}