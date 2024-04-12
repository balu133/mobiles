import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdLogIn } from "react-icons/io";
function Header() {
  return (
    <header className='head'>
        <nav className='nav nav-pills justify-content-center'>
           
                <li className='nav-item'>
                    <Link to="" className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>
                        Home
                    </Link>
                </li>
                
                <li className='nav-item'>
                    <Link to="" className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>
                        Contact Us
                    </Link>
                </li>
                
                <li className='nav-item'>
                    <Link to="" className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>
                        About Us
                    </Link>
                </li>
             <nav className='nav justify-content-end'>
             <li className='nav-item position-absolute top-0 end-0'>
                    <Link to="" className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>
                        <IoMdLogIn />
                    </Link>
                </li>
             </nav>
        </nav>
    </header>
  )
}

export default Header
