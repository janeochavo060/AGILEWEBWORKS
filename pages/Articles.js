import React, { useState, useEffect } from 'react';
import LinesBigArticleDescription from '@/components/slices/LinesBigArticleDescription'
export default function Articles() {
  return (
    <>
     <div className='flex flex-col'>
        <LinesBigArticleDescription
          bigTitle={`Articles`}
          description={`These are my various writings. Some might say they are cool.`}
          list={[
            {
              title: `'Dance Like No One is Watching' Is Bad Advice` 
            },
            {
              title: `Nectar of the Gods` 
            },
            {
              title: `The Magic Happens at 7 1/2 Pumps` 
            }
          ]}
        />
     </div>
    </>
  )
}
