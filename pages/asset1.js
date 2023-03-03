import React from 'react'

import resourcePortal from 'static-data/resourcePortal';
import { LoginForm } from '@/components/asset/slices/LoginForm';
import { Tabs } from '@/components/asset/slices/Tabs';
const asset1 = ({slices}) => {
  return (
    <div className='pt-[100px]'>
        {slices.map((slice, index) => {
            return(
                <div key={index}>
                    {slice.sliceType === 'loginForm' && (
                        <LoginForm slice={slice} />
                    )}
                    {slice.sliceType === 'tabs' && (
                        <Tabs slice={slice} />
                    )}
                    
                </div> 
            ) 
        })}
    </div>
  )
} 


export async function getStaticProps() {
    const slices = resourcePortal.slices;
    return {
      props: {
        slices,
      },
    }
  }

export default asset1