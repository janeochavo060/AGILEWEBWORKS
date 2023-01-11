import React, { useState, useEffect } from 'react';

const SliceBackground = (props) => {

  return (
    <>
      <div className='flex flex-col justify-center items-center w-full lg:h-[800px] h-[700px] lg:mx-0 relative shadow-xl sliceGradient'>

        <div className=' z-20'>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default SliceBackground