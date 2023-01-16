import React, { useState, useEffect } from 'react';
import Image from 'next/image';
export default function S13 ({}) {
  const [capabilities, setCapabilities] = useState([
    { name: "Delivery App", color: "#386EC1", src: "/images/stock/kickstart.png"},
    { name: "Golf System App", color: "#00AAE8", src: "/images/stock/golf-app.png"},
    { name: "Food Delivery App", color: "#B2272D", src: "/images/stock/food-delivery.png"},
  ]);
  return (
    <div className='py-16'>
      <div className='flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:p-0 p-12'>
        <div className='lg:text-[50px] text-[35px] font-bold'>
          {`Some of our capabilities`}
        </div>
        {/* xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full */}
        <div className='flex md:flex-row flex-col justify-between items-center my-16  w-full relative'>
          {capabilities &&
            capabilities.map((capability, i) => (
              <div
                className={`flex flex-col w-full justify-center items-center p-4`}
                style={{'backgroundColor': `${capability?.color}`}}
                key={i}
              >
                <div className={`relative`}>
                  <Image
                    src={capability?.src}
                    alt="image"
                    className='-mt-12'
                    width={600}
                    height={300}
                  />
                </div>
                <div>
                  <p className='text-white font-bold text-[30px] my-6'>
                    {capability?.name}
                  </p>
                </div>
                <div className='my-4'>
                  <button
                    className='flex justify-between items-center  text-lg font-bold transition ease-in-out delay-150 bg-transparent hover:bg-blue-500 hover:to-blue-500 hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full text-white cursor-pointer'
                    onClick={() => {}}
                  >
                    <Image
                      src="/svg/play.svg"
                      alt="Arrow right"
                      className=''
                      width={60}
                      height={60}
                    />
                    <span className='mx-4'>Click to Play Video</span>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
  
}