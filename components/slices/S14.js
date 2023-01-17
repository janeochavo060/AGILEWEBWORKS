import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
export default function S5 ({
  backgroundColor
}) {
  const [capabilities, setCapabilities] = useState([
    { name: "Node.js", },
    { name: "REACT.js", },
    { name: "AWS", },
    { name: "Drupal", },
    { name: "Laravel", },
    { name: "Databases", },
  ]);
  const [images, setImages] = useState([
    { src: "/mockups/wingzone.jpg"},
    { src: "/mockups/mimosa.jpg"}
  ])
  const [active, setActive] = useState('Plan')

  return (
    // BIG TITLE; LEFT MENU; WEB MOCKUP; MOBILE MOCKUP;
    <div className='flex flex-col justify-center items-center w-full h-[900px] lg:mx-0' style={{'backgroundColor':`${backgroundColor || '#FFFFFF'}`}}>
      <div className='flex md:flex-row flex-col justify-between items-center xxl:min-w-[1500px] xl:min-w-[1260px] max-w-full my-8 border-t border-gray-400 md:py-16'>
        <div className='flex flex-col justify-center items-start '>
          <p className='text-[18px] leading-[24px]'>OUR CAPABILITIES</p>
          {capabilities &&
              capabilities.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActive(item?.name)}
                >
                  <div className={`flex items-center text-gray-700 my-2 md:px-0 font-bold border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline`}>
                    <span className='text-[12px] pr-6'>{`0${i+1}`}</span>
                    <span className={`
                      md:text-[40px]  text-[30px] 
                      ${
                        active === item?.name
                          ? "underline underline-offset-4"
                          : ""
                      }
                    `}>{item.name}</span>
                  </div>
                </div>
              ))
            }
        </div>
        <div className='flex flex-col justify-between items-center h-[600px]'>
          <div className='flex lg:text-[40px] text-[30px] font-bold text-gray-700 max-w-[700px] text-center '>
            {`Ultra light-wight development platform for ultra-fast back-end systems using JavaScript.`}
          </div>
          <div className='relative md:w-[700px] w-[190px] md:h-[400px] h-[300px] m-2'>
            <Image
              src={'/mockups/angels-mock-mac.png'}
              alt="image"
              className=''
              fill
            />
          </div>
        </div>
        <div className='flex flex-col mr-12'>
          <div className='relative md:w-[150px] w-[190px] md:h-[300px] h-[300px]'>
            <Image
              src={'/mockups/angels-app-1.png'}
              alt="image"
              className=''
              fill
            />
          </div>
          <div className='relative md:w-[150px] w-[190px] md:h-[300px] h-[300px]'>
            <Image
              src={'/mockups/angels-app-2.png'}
              alt="image"
              className='absolute top-0 left-0 -mt-24 ml-28'
              fill
            />
          </div>
        </div>
      </div>
    </div>
    
  )
}