import React from 'react'
import "./Intro.scss"

function Intro() {
  return (
    <div className='Intro'>
      <video loop autoPlay>
        <source src='/assets/introVideo.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default Intro
