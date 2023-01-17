import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
export default function S9 ({
  backgroundColor,
  link,
}) {
  useEffect(() => {
    document.documentElement.style.setProperty('--triangle-color', backgroundColor)
  }, [])
  return (
    // VIDEO LEFT; TITLE; DESCRIPTION
    <div className='flex my-8 ml-8'>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0 trapezoid-left' style={{"backgroundColor": backgroundColor}}>
        <div className='flex md:flex-row flex-col justify-between items-center xxl:max-w-[1920px] xl:max-w-[1920px] w-full relative'>
          <div className='flex w-[1000px] justify-center'>
            <div className='flex flex-col justify-center items-start p-4'>
              <div className='lg:text-[30px] text-[35px] font-bold text-white'>
                {`Golf Course Management System`}
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
          <div className='flex relative items-start md:w-[900px] md:h-[500px] w-[320px] h-[200px]'>
          {
              link ? 
                <>
                    <ReactPlayer
                      className="player"
                      url={link}
                      width="100%"
                      height="100%"
                    />
                </>
              : <>
                  <div>
                    Missing Video File.
                  </div>
                </>
            }
          </div>
          
          
        </div>
      </div>
      
    </div>
    
  )
}