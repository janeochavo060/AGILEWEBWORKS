import React, { useState, useEffect, } from 'react';
import Image from 'next/image';
export default function S5 ({slice}) {
  const [agileSteps, setAgileSteps] = useState([
    { name: "Plan", },
    { name: "Design", },
    { name: "Develop", },
    { name: "Test", },
    { name: "Deploy", },
    { name: "Review", },
    { name: "Launch", },
  ]);
  const [images, setImages] = useState([
    { src: "/mockups/wingzone.jpg"},
    { src: "/mockups/mimosa.jpg"}
  ])
  const [active, setActive] = useState('Plan')

  return (
    <div className='my-8'>
      <div className='flex flex-col justify-center items-center w-full h-[800px] lg:mx-0  '>
        <div className='flex lg:text-[40px] text-[40px] font-bold text-gray-700 max-w-[1000px] text-center'>
          {`Applying the Agile Methodology (Scrum) together with a creative thinking approach`}
        </div>
        <div className='flex justify-between items-center xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full my-8'>
          <div className='flex flex-col justify-center items-start'>
            {agileSteps &&
                agileSteps.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setActive(item?.name)}
                  >
                    <div
                      className={`
                        flex items-center text-gray-700 my-2 md:px-0 font-bold border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline
                          
                        `}
                    >
                      <span className='text-[12px] px-6'>{`0${i+1}`}</span>
                      <span className={`
                        text-[38px] 
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
          <div className='flex flex-col items-end'>
            <div className='flex items-end'>
              <Image
                src={'/images/stock/stock3.jpg'}
                alt="image"
                className='m-4 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md'
                width={450}
                height={100}
              />
              <Image
                src={'/images/stock/stock4.jpg'}
                alt="image"
                className='m-4 rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md'
                width={200}
                height={100}
              />
            </div>
            <div className='flex justify-end items-end'>
              <div className='relative h-[320px] w-[600px] m-4'>
                <Image
                  src={'/images/stock/stock2.jpg'}
                  alt="image"
                  fill
                  className=' rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md'
                  // width={700}
                  // height={100}
                />
              </div>
              
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
    
  )
}