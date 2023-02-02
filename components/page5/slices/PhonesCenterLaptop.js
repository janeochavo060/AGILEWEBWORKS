import { stringify } from 'postcss';
import React from 'react'
import { string } from 'sharp/lib/is';

export const PhonesCenterLaptop = ({slice, post}) => {
  return (
        <section key={slice.sliceId} className={`slice slice-type-${slice.sliceType} bg-[${post.bgColor}]`}>
            <div className="container py-[50px] px-[234px] relative flex flex-wrap mx-auto justify-center">
              <div className="phone1 absolute top-0 left-0">
                <img src={slice.phones[0].uri} />
              </div>
              <div className='laptop'>
                <img src={slice.laptop.uri} />
              </div>
              <div className='phone2 absolute right-0 bottom-0'>
                <img src={slice.phones[1].uri} />
              </div>
            </div>
        </section>
  )
}
