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
    { src: "/mockups/wingzone.jpg" },
    { src: "/mockups/mimosa.jpg" },
    { src: "/mockups/mimosa.jpg" },
    { src: "/mockups/wingzone_mobilea.jpg" },
  ]);
  const [active, setActive] = useState("Software Development");

  return (
    <div className="bg-sky-600 text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
        <div className="lg:col-span-1 p-8 flex flex-col gap-2">
          <h2 className="text-3xl font-bold leading-0 mb-4">
            Donec quan felis, ultrices pellentesque eu sem.
          </h2>
          {servicesOffered.map((item) => (
            <button
              key={item?.name}
              aria-label={item?.name}
              className={`w-full text-left before:border-2 before:w-8 before:px-2 before:rounded-full transition-all ${
                active !== item?.name && "before:border-transparent"
              } flex items-center gap-x-4 text-xl`}
              onClick={() => setActive(item?.name)}
            >
              {item?.name}
            </button>
          ))}
        </div>
        <div className="col-span-2">
          <div className="masonry-effect w-[1200px] max-h-[640px] lg:max-h-[480px]">
            {images.map((image, i) => (
              <div key={i} className="h-full w-full masonry-item">
                <Image
                  alt=""
                  blurDataURL={image?.src}
                  src={image?.src}
                  width="100"
                  height="920"
                  className="w-full h-full shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

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
                      blurDataURL={image?.src}
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