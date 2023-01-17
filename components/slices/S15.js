import React, { useState, useEffect } from 'react';
import Image from 'next/image'
export default function S12 ({ }) {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0  lg:p-0 p-4'>
        <div className='flex md:flex-row flex-col justify-between items-start  md:w-[1260px] relative'>
          <div>
            <Image
              src="/images/stock/stock2.jpg"
              alt="image"
              className='rounded-[30px]'
              width={600}
              height={450}
            />
          </div>
          <div className='w-[550px]'>
            <div className='flex flex-col justify-start items-start '>
              <div className='lg:text-[40px] text-[35px] font-bold'>
                {`Website & Software Development`}
              </div>
              <div className='flex items-center md:w-[800px] w-full'>
                <p className='text-blue-400 text-3xl mr-2'>✓</p>
                <div
                  className={`text-start text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline`}
                >
                  Design and manage your project from start to finish.
                </div>
              </div>
              <div className='flex items-center md:w-[800px] w-full'>
                <p className='text-blue-400 text-3xl mr-2'>✓</p>
                <div
                  className={`text-start text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline`}
                >
                  Turn your paper-based process flow into a cloud-based system.
                </div>
              </div>
              <div className='lg:text-[40px] text-[35px] font-bold'>
                {`Outsourcing`}
              </div>
              <div className='flex items-center md:w-[800px] w-full'>
                <p className='text-blue-400 text-3xl mr-2'>✓</p>
                <div
                  className={`text-start text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline`}
                >
                  Create an in-house team working solely on your project. The team can be fully accountable to you
                </div>
              </div>
              <div className='flex items-center md:w-[800px] w-full'>
                <p className='text-blue-400 text-3xl mr-2'>✓</p>
                <div
                  className={`text-start text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline`}
                >
                  Provide extra manpower for your existing project
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}