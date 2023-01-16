import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
export default function S8 ({ slice }) {

  return (
    // FLEX LEFT VIDEO; RIGHT TITLE; BULLET DESCRIPTION
    // OR JUST A VIDEO?
    <div className='m-8'>
      <div className="video-wrapper">
        <ReactPlayer
          className=""
          url="https://www.youtube.com/watch?v=8dGdIcyDk1w&ab_channel=edureka%21"
          width="100%"
          height="100%"
        />
      </div>
      
    </div>
  )
}