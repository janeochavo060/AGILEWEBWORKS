import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const LinesBigArticleDescription = ({
  bigTitle,
  description,
  list,
}) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full h-[400px]'>
        <div className='flex flex-col justify-center xxl:max-w-[1345px] xl:max-w-[1260px] w-full '>
          <div className='flex flex-col items-start'>
            <div>
              <Image
                src="/images/lines.png"
                alt="Vercel Logo"
                className='mx-1'
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center xxl:max-w-[910px] xl:max-w-[910px] w-full '>
          <div className='flex flex-col items-start '>
            <div className='text-[60px] font-bold text-slate-800'>
              {bigTitle}
            </div>
            <div className='text-lg text-teal-800 xl:max-w-[550px] my-2'>
              {description}
            </div>
          </div>
          <div className='flex flex-col my-4'>
            {
              list && list?.length > 0 &&
              list?.map((item, i) => (
                <>
                  <div 
                    className='font-bold text-slate-800'
                    key={i}
                  >
                    {item?.title}
                  </div>
                </>
              ))
            }
          </div>
          
        </div>
      </div>
    </>
 )
}
export default LinesBigArticleDescription