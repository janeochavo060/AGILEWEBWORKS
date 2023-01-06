import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment'
const ArticleTitleDateDescription = ({
  articleTitle,
  date,
  description
}) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full h-[200px] lg:mx-0 px-6'>
        <div className='flex xxl:max-w-[1345px] xl:max-w-[800px] w-full '>
          <div className='flex flex-col items-start '>
            <div className='lg:text-[30px] text-[20px] my-2 font-bold'>
              {articleTitle}
            </div>
            <div className='lg:text-base text-sm'>
              <span className='text-slate-800 font-bold uppercase'>
                {moment(date).format('MMMM Do, YYYY')}
              </span>
              <span className='text-xl mx-2'>
                —
              </span>
              <span className='text-slate-800'>
                {description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
 )
}

export default ArticleTitleDateDescription