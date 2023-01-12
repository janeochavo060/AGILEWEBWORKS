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
      <div className='flex flex-col justify-center items-center w-full md:h-[900px] h-full lg:mx-0  '>
        <div className='flex lg:text-[40px] text-[30px] font-bold text-gray-700 max-w-[1000px] text-center '>
          {`Applying the Agile Methodology (Scrum) together with a creative thinking approach`}
        </div>
        <div className='flex md:flex-row flex-col justify-between items-center xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full my-8'>
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
                        md:text-[38px] text-[30px] 
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
          <div className='flex flex-col md:items-end items-center'>
            <div className='flex items-end '>
              <div className='relative md:w-[450px] w-[190px] md:h-[250px] h-[150px] m-2'>
                <Image
                  src={'/images/stock/stock3.jpg'}
                  alt="image"
                  className='rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md'
                  fill
                />
              </div>
              <div className='relative md:w-[200px] w-[150px] md:h-[300px] h-[250px] m-2'>
                <Image
                  src={'/images/stock/stock4.jpg'}
                  alt="image"
                  className='rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md'
                  fill
                />
              </div>
            </div>
            <div className='flex justify-end items-end'>
              <div className='relative  md:w-[600px] w-[300px] md:h-[370px] h-[200px] m-4'>
                <Image
                  src={'/images/stock/stock2.jpg'}
                  alt="image"
                  fill
                  className=' rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md'
                />
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
    
  )
}