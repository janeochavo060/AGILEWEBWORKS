import React from 'react'
import { useState } from 'react';
import { TabTitleDescriptionLink } from './TabTitleDescriptionLink';
export const Tabs = ({slice}) => {
  const tabs = slice.data;
  const [activeTab, setActiveTab] = useState(0);


  return (
    <div className='py-[100px] container max-w-[1200px] px-[15px] mx-auto'>
      <div className='flex'>
        <div className='col-6 w-1/2'>
          {/* <img className='h-full object-cover rounded-xl' src="https://via.placeholder.com/1920x700" /> */}
        </div>
        <div className='col-6 w-1/2'>
          <div className="tab-nav mb-[20px] px-[10px]">
            <div className='flex items-center flex-wrap' style={{marginLeft: '-15px', marginRight: '-15px',}}>
              {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={`font-bold text-[16px] cursor-pointer px-[15px] ${index === activeTab && 'text-[#034F8B] cursor-not-allowed'}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.tabTitle}
                  </div>  
                ))}
            </div>
            <div className='line border-b-[2px] border-[#D9D9D9] mt-[10px] block w-[100%]'>

            </div>
          </div>
          {tabs[activeTab] && (
            <>
              <div className='tab-content px-[10px] pb-[20px]'>
                {tabs[activeTab].sliceType === 'titleDescriptionLink' &&
                  <TabTitleDescriptionLink tab={tabs[activeTab]} />
                }
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
  