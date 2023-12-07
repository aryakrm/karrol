import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"

function Nav() {
  return (
    <nav>
      <img src="/assets/karrolLogo.png" alt="Karrol Logo" />
      <div className='navMenu' >
        <ul>
            <li> <Link to={"/home"} >Anasayfa</Link> </li>
            <li> <Link to={"/about"} >Hakkımızda</Link> </li>
            <li> <Link to={"/suppliers"} >Tedarikçiler</Link> </li>
            <li> <Link to={"/distributor"} >Distribütör</Link> </li>
            <li> <Link to={"/contact"} >İletişim</Link> </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
