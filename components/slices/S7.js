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
    <div className='my-8'>
      <div className='flex flex-col justify-center items-center w-full lg:mx-0  '>
        <div className='flex lg:text-[40px] text-[40px] font-bold text-gray-700 max-w-[1000px] text-center'>
          {`Why choose us`}
        </div>
        <div className='flex text-lg text-gray-700 max-w-[1000px] text-center'>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam leo, lacinia porta tincidunt et, tempus et mi. Nullam congue viverra augue, quis tristique felis luctus ut. Nulla gravida purus lorem, sit amet interdum sem ornare id. Nunc posuere, libero sed porttitor cursus, dui nisi accumsan nibh, ut mollis erat erat a metus.`}
        </div>
        <div className='flex justify-center flex-wrap items-center xxl:min-w-[1345px] xl:min-w-[1260px] xxl:max-w-[1345px] xl:max-w-[1260px] max-w-full my-8'>

            {images &&
              images.map((image, i) => (
                <div
                  className=' '
                  key={i}
                >
                  <div className={``}>
                    <Image
                      src={image?.src}
                      alt="image"
                      className='my-2 px-8'
                      width={180}
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