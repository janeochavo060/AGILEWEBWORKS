import React, { useState, useEffect } from 'react';

const BigTitleWithSmallTitle = ({
  bigTitle,
  smallTitle
}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full lg:h-[300px] h-[150px] lg:mx-0 px-6'>
      <div className='flex xxl:max-w-[1345px] xl:max-w-[1260px] w-full'>
        <div className='flex flex-col items-start '>
          <div className='text-lg text-teal-800 my-2'>
            {smallTitle}
          </div>
          <div className='lg:text-[60px] text-[35px] font-bold text-slate-800'>
            {bigTitle}
          </div>
        </div>
      </div>
    </div>
 )
}
export default BigTitleWithSmallTitle