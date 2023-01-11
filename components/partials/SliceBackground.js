import React, { useState, useEffect } from 'react';

const SliceBackground = (props) => {

  return (
    <>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-[700px] lg:mx-0 bg-sky-600'>
        {props.children}
      </div>
    </>
  )
}

export default SliceBackground