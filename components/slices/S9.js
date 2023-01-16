import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
export default function S9 ({
  backgroundColor,
  triangleOrientation,
}) {
  useEffect(() => {
    if(triangleOrientation === 'reverse') {
      document.documentElement.style.setProperty('--triangle-color-left', backgroundColor)
    } else {
      document.documentElement.style.setProperty('--triangle-color-left', backgroundColor)
    }
    
  }, [])
  return (
    // VIDEO LEFT; TITLE; DESCRIPTION
    <div className='flex my-8 mr-8'>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0' style={{"backgroundColor": backgroundColor}}>
        <div className='flex md:flex-row flex-col justify-between items-center xxl:max-w-[1920px] xl:max-w-[1920px] w-full relative'>
          <div className='flex relative items-start md:w-[900px] md:h-[500px] w-[320px] h-[200px]'>
            <ReactPlayer
              className="player"
              url="https://www.youtube.com/watch?v=8dGdIcyDk1w&ab_channel=edureka%21"
              width="100%"
              height="100%"
            />
          </div>
          <div className='flex w-[850px] justify-start'>
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
      </div>
      {/* <div className={triangleOrientation === 'reverse' ? `triangle-right` : `triangle-left`}/> */}
    </div>
    
  )
}