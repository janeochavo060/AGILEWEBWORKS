import React, { useState, useEffect } from 'react';
import LinesBigArticleDescription from '@/components/slices/LinesBigArticleDescription'
export default function About() {
  return (
    <>
     <div className='flex flex-col'>
        <LinesBigArticleDescription
          bigTitle={`About`}
          description={`I'm just a kid living in the 90's, writing articles in his secret public journal wondering if someday, somewhere in the future, they will be read by someone.`}
        />
     </div>
    </>
  )
}
