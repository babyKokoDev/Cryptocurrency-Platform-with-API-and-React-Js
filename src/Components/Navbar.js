import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <Link to='/'>
    <div>
        <div className='navbar'>
            <FaCoins className='icon' />
            <h1>Coin <span className='purple'>Search</span></h1>
        </div>
    </div>
    </Link>
  )
}

export default Navbar