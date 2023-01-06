import React, { useState, useEffect } from 'react';

const BigTitleWithSmallTitle = ({
  bigTitle,
  smallTitle
}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[300px]'>
      <div className='flex xxl:max-w-[1345px] xl:max-w-[1260px] w-full '>
        <div className='flex flex-col items-start '>
          <div className='text-md text-teal-800 my-2'>
            {smallTitle}
          </div>
          <div className='text-[60px] font-bold text-slate-800'>
            {bigTitle}
          </div>
        </div>
      </div>
    </div>
 )
}
export default BigTitleWithSmallTitle