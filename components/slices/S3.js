import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
export default function S3 ({slice}) {
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
    <div className='my-8 mr-8'>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-[700px] lg:mx-0 bg-red-700 '>
        <div className='flex justify-between items-center xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full relative'>
          <div className='flex items-center w-[600px] h-[500px]  top-0 right-0'>
            <Image
              src={'/mockups/wingzone_mobilea.jpg'}
              alt="image"
              className='m-4 rounded-[20px] shadow-md'
              width={300}
              height={100}
            />
            <Image
              src={'/mockups/wingzone_mobileb.jpg'}
              alt="image"
              className='m-4 rounded-[20px] shadow-md'
              width={300}
              height={100}
            />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <div className='lg:text-[30px] text-[35px] font-bold text-white'>
              {`Restaurant Online Food Ordering`}
            </div>
            <div className='flex flex-col w-[650px]'>
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
    
  )
}