import React from 'react'
import "./Home.scss"
import Intro from '../../components/Intro/Intro'
import Sec1 from '../../components/Sec1/Sec1'
import Sec2 from '../../components/Sec2/Sec2'
import Sec3 from '../../components/Sec3/Sec3'




function Home() {
  
  return (
    <div className='Home' >
      
      <Intro/>
      <Sec1/>
      <Sec2/>
      <Sec3/>
    </div>
  )
}

export default Home
