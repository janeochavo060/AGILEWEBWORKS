import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
export default function S8 ({ 
  link
 }) {

  return (
    // FLEX LEFT VIDEO; RIGHT TITLE; BULLET DESCRIPTION
    // OR JUST A VIDEO?
    <div className='m-8'>
      {
        link ? 
          <>
            <div className="video-wrapper">
              <ReactPlayer
                className="player"
                url={link}
                width="100%"
                height="100%"
              />
            </div>
          </>
        : <>
            <div className='video-wrapper'>
              Missing Video File.
            </div>
          </>
      }
      
      
    </div>
  )
}