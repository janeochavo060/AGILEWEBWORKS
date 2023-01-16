import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
export default function S2 ({slice}) {
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
    // BIG TITLE LEFT; MENU; IMAGES WEB
    <div className='m-8'>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0 bg-gradient-to-r from-sky-600 via-blue-600 to-teal-700 background-animate lg:p-0 p-4'>
        <div className='flex md:flex-row flex-col justify-between items-center xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full relative'>
          <div className='flex flex-col justify-center items-start'>
            <div className='lg:text-[30px] text-[35px] font-bold text-white'>
              {`Donec quan felis, ultrices pellentesque eu sem.`}
            </div>
            <div className='flex flex-col'>
              {servicesOffered &&
                servicesOffered.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setActive(item?.name)}
                  >
                    <div
                      className={`
                        text-white text-xl my-2 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline
                          ${
                            active === item?.name
                              ? "underline underline-offset-4"
                              : ""
                          }
                        `}
                    >
                      {item.name}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='flex flex-col justify-between items-center w-[600px] h-[500px]  top-0 right-0'>
            {images &&
              images.map((image, i) => (
                <div
                  className=' '
                  key={i}
                >
                  <div className={`relative md:w-[350px] w-[300px] md:h-[200px] h-[200px]`}>
                    <Image
                      src={image?.src}
                      alt="image"
                      className='rounded-lg shadow-md'
                      width={350}
                      height={230}
                    />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    
  )
}