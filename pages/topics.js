import React, { useState, useEffect } from 'react';
import BigTitleWithSmallTitle from '@/components/slices/BigTitleWithSmallTitle'
import ArticleTitleDateDescription from '@/components/slices/ArticleTitleDateDescription';
const Topics = (props) => {
  return (
    <>
      <div className='flex flex-col xl:mx-0 mx-6'>
        <ArticleTitleDateDescription
          articleTitle={`'Dance Like No One is Watching' is Bad Advice`}
          date={'1996-11-18'}
          description={`The Macarena is an International hit & dance craze. The song is inspired by flamenco dancer Diana Herrera's Beauty, but do you know where the dance came from?`}
        />
        <ArticleTitleDateDescription
          articleTitle={`Nectar of the gods`}
          date={'1996-08-16'}
          description={`The time has come. We had seen the commercials. This was out first foray into the underground competitive world of Surge.`}
        />
        <ArticleTitleDateDescription
          articleTitle={`'Dance Like No One is Watching' is Bad Advice`}
          date={'1996-11-18'}
          description={`The Macarena is an International hit & dance craze. The song is inspired by flamenco dancer Diana Herrera's Beauty, but do you know where the dance came from?`}
        />
        <ArticleTitleDateDescription
          articleTitle={`Nectar of the gods`}
          date={'1996-08-16'}
          description={`The time has come. We had seen the commercials. This was out first foray into the underground competitive world of Surge.`}
        />
      </div>
    </>
  )
}

export default Topics