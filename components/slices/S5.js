import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
export default function S5 ({slice}) {
  return (
    <div className='my-8 mr-8'>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-[700px] lg:mx-0 bg-sky-700 '>
        <div className='flex justify-between items-center xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full relative'>
          <div className='flex items-center w-[600px] h-[500px]  top-0 right-0'>
            <Image
              src={'/images/stock/stock1.jpg'}
              alt="image"
              className='m-4 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md'
              width={600}
              height={400}
            />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <div className='lg:text-[30px] text-[35px] font-bold text-white'>
              {`In service for 10 years`}
            </div>
            <div className='flex flex-col w-[600px]'>
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
    </div>
    
  )
}