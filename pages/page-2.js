import React, { useState, useEffect } from 'react';
import S1 from '@/components/slices/S1'
import S2 from '@/components/slices/S2'
import S3 from '@/components/slices/S3'
import S4 from '@/components/slices/S4'
import S5 from '@/components/slices/S5'
import S6 from '@/components/slices/S6'
import S7 from '@/components/slices/S7'
import S8 from '@/components/slices/S8'
import S9 from '@/components/slices/S9'
import S10 from '@/components/slices/S10'
import SliceBackground from '@/components/partials/SliceBackground';
import ContactForm  from '@/components/partials/ContactForm';
const Website = ({}) => {
  return (
    <>
      <div className='flex flex-col'>
        <S1/>
        <S8/>
        <S9
          backgroundColor={'#386EC1'}
        />
        <S10
          backgroundColor={'#00AAE8'}
        />
        <S9
          backgroundColor={'#B2272D'}
        />
        {/* <S2/> */}
        {/* <S3/> */}
        {/* <S4/> */}
        {/* <S5/> */}
        <S6/>
        <S7/>
        <SliceBackground>
          <ContactForm/>
        </SliceBackground>
      </div>
    </>
  )
}

export default Website