import React from 'react'
import Link from 'next/link';

export const TabTitleDescriptionLink = ({tab}) => {
  // console.log(tab); 
  return (
    <div>
      <h2 className='font-bold font-[#343434] text-[35px] leading-[36px]'>
        {tab.title} 
      </h2>
      <div className="my-[20px] text-[16px] leading-[24px]" dangerouslySetInnerHTML={{ __html: tab.description }} />

      <Link href={tab.link.value} className='font-bold min-w-[175px] text-[14px] uppercase bg-[#034F8B] text-white px-[29px] py-[8px] rounded-[4px] inline-block'>
        {tab.link.title}
      </Link>
    </div>
  )
}
 