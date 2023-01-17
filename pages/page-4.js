import React, { useState, useEffect } from 'react';
import S1 from '@/components/slices/S1'
import S2 from '@/components/slices/S2'
import S3 from '@/components/slices/S3'
import S4 from '@/components/slices/S4'
import S5 from '@/components/slices/S5'
import S6 from '@/components/slices/S6'
import S7 from '@/components/slices/S7'
import S12 from '@/components/slices/S12'
import S13 from '@/components/slices/S13'
import S14 from '@/components/slices/S14'
import S15 from '@/components/slices/S15'
import S16 from '@/components/slices/S16'
import SliceBackground from '@/components/partials/SliceBackground';
import ContactForm  from '@/components/partials/ContactForm';
const Website = ({}) => {
  
  return (
    <>
      <div className='flex flex-col'>
        <S1
          backgroundColor={`#E9EEF7`}
        />
        {/* <S12/>
        <S13/> */}

        <S14
          backgroundColor={`#E9EEF7`}
        />
        <S15/>
        <S16/>
        <S7/>
        <SliceBackground>
          <ContactForm/>
        </SliceBackground>
      </div>
    </>
  )
}

export default Website