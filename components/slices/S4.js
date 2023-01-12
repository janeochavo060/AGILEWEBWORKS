import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
export default function S4 ({slice}) {
  const [servicesOffered, setUpperHeaderMenu] = useState([
    { name: "Software Development", },
    { name: "SaaS", },
    { name: "Enterprise", },
    { name: "Apps", },
    { name: "Website", },
  ]);
  const [images, setImages] = useState([
    { src: "/mockups/wingzone.jpg"},
    { src: "/mockups/mimosa.jpg"}
  ])
  const [active, setActive] = useState('Software Development')

  return (
    <div className='flex my-8 ml-8'>
      <div className="md:block hidden triangle-light-blue"/>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0 bg-sky-500 '>
        <div className='flex md:flex-row flex-col justify-between items-center xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full '>
          <div className='flex flex-col justify-center md:w-[400px] w-full items-start md:p-0 p-8'>
            <div className='lg:text-[30px] text-[35px] font-bold text-white'>
              {`Golf Course Management System`}
            </div>
            <div className='flex flex-col md:w-[450px]'>
              <div
                className={`
                  text-white md:text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline
                  `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam leo, lacinia porta tincidunt et, tempus et mi. Nullam congue viverra augue, quis tristique felis luctus ut.
              </div>
            </div>
          </div>
          <div className='flex md:flex-row flex-col items-center md:w-[750px] w-full md:h-[600px] h-full'>
            <div className='relative md:w-[500px] w-[300px] md:h-[300px] h-[200px] m-4'>
              <Image
                src={'/mockups/mimosa.jpg'}
                alt="image"
                className='rounded-[20px] shadow-md'
                fill
              />
            </div>
            <div className='relative md:w-[260px] md:h-[500px] w-[260px] h-[500px] m-4'>
              <Image
                src={'/mockups/golf-app-1.jpg'}
                alt="image"
                className='rounded-[20px] shadow-md'
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}