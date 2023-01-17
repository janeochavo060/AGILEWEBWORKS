import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
export default function S9 ({
  backgroundColor,
  link
}) {
  return (
    // VIDEO LEFT; TITLE; DESCRIPTION
    <div className='flex'>
      <div className='flex flex-col justify-center items-center w-full lg:h-[500px] h-full lg:mx-0 bg-gradient-to-r from-sky-600 via-blue-600 to-teal-700 background-animate'>
        <div className='flex md:flex-row flex-col justify-between w-[1345px] items-center relative'>
          <div className='flex md:w-[300px] text-[60px] font-bold text-white'>
            The Microservices Option
          </div>
          <div className='flex  justify-start'>
            <div className='flex flex-col justify-center items-start p-4'>
              <div className='flex flex-col md:w-[750px] w-ful'>
                <div
                  className={`
                    text-white text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline
                    `}
                >
                {`Microservices is a technique to program development in where a huge application is designed as a collection of modular services. Each module can handle a particular business goal and uses a very simple, well-defined interface to express with other models of services.`}
                <br/>
                <br/>
                {`Companies such as Uber, Amazon, Netflix, and eBay are built using microservices. Microservices are used when the system is too big to be one system.`} 
                <br/>
                <br/>
                {` Systems that are not microservices are termed "monolithic".`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}