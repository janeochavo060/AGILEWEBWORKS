import { stringify } from 'postcss';
import React from 'react'
import { string } from 'sharp/lib/is';

export const PhonesCenterLaptop = ({slice, post}) => {
  console.log('phonesCenterLaptop', slice)
  return (
    <>
        <section key={slice.sliceId} className={`py-[50px] slice slice-type-` + slice.sliceType}>
            <div className="container flex flex-wrap mx-auto">
              <div className="phone1">
                <img src={slice.phones[0].uri} />
              </div>
              <div className='laptop'>
                <img src={slice.laptop.uri} />
              </div>
              <div className='laptop'>
                <img src={slice.phones[1].uri} />
              </div>
            </div>
        </section>
    </>
  )
}
