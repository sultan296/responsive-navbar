import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import './Navbar.css'

function Navbar() {
    const [openMenu,setMenu] = useState(false)
  return (
    <div className='navbar'>
      <Link to={"/"}><i class="fa-duotone fa-solid fa-house fa-xl" style={{marginLeft:"1em"}}></i></Link>
      <div className='lists'>
        <p className='menu-icon' onClick={()=>{
            setMenu(!openMenu)
        }}><i class="fa-solid fa-bars fa-xl"></i></p>
      </div>
    <ul className={openMenu?"show":""}>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink to={"/service"}>Service</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
    </ul>
    </div>
  )
}

export default Navbar
