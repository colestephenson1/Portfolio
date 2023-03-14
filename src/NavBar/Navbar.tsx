import React from 'react'
import Link  from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-options'>
            <Link href='/'><p className='option'>Home</p></Link>
            <Link href='/services'><p className='option'>Services</p></Link>
            <Link href='/about'><p className='option'>About Me</p></Link>
        </div>
    </div>
  )
}

export default Navbar