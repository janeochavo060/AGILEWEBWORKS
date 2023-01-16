import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
export default function S5 ({slice}) {
  const [images, setImages] = useState([
    { src: "/images/logos/angels.jpg"},
    { src: "/images/logos/apec.jpg"},
    { src: "/images/logos/figaro.jpg"},
    { src: "/images/logos/filinvest_city.jpg"},
    { src: "/images/logos/filinvest.jpg"},
    { src: "/images/logos/hotel_101.jpg"},
    { src: "/images/logos/mimosa_golf.jpg"},
    { src: "/images/logos/north_park.jpg"},
    { src: "/images/logos/quest_hotel_cebu.jpg"},
    { src: "/images/logos/quest_hotel_clark.jpg"},
    { src: "/images/logos/unilab.jpg"},
    { src: "/images/logos/vitarich.jpg"},
    { src: "/images/logos/viva.jpg"},
    { src: "/images/logos/wingzone.jpg"},
  ])
  const [active, setActive] = useState('Plan')

  return (
    // TITLE; DESCRIPTION WIDE; MANY LOGOS
    <div className='my-8'>
      <div className='flex flex-col justify-center items-center w-full lg:mx-0  '>
        <div className='flex lg:text-[40px] text-[30px] font-bold text-gray-700 text-center'>
          {`Why choose us`}
        </div>
        <div className='flex md:text-[20px] text-md text-gray-700 text-center my-4 md:mx-0 mx-4'>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam leo, lacinia porta tincidunt et, tempus et mi. `}
        </div>
        <div className='flex justify-center flex-wrap items-center  max-w-full my-8 '>

            {images &&
              images.map((image, i) => (
                <div
                  key={i}
                >
                  <div className={``}>
                    <Image
                      src={image?.src}
                      alt="image"
                      className='my-2 px-8'
                      width={250}
                      height={200}
                    />
                    {/* {image?.src} */}
                  </div>
                </div>
              ))
            }
          
          
        </div>
      </div>
    </div>
    
  )
}