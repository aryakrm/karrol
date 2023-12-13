import React from 'react'
import "./Intro.scss"

function Intro() {
  return (
    <div className='Intro'>
      <video autoPlay loop muted >
        <source src='/assets/introVideo.mp4' type='video/mp4' />
      </video>
      <h1>KARROL OTOMOTİV
           Orijinal Otomobil Parçaları </h1>
           <div class="mouse"></div>
    </div>
  )
}

export default Intro
