import React from 'react'
import Link from 'next/link'
import './Menu.css';

const Menu = (props) => {
  return (
    <>
        {/* hamburger menu open */}
      <div className={"fixed flex flex-col justify-center items-center text-2xl font-medium text-white bg-green-700 w-full h-screen z-30 text-center top-0 md:hidden max-[485px]:text-lg max-[390px]:text-xs " + (props.menu? 'isMenuActive' : 'isMenuInactive')}>
          <ul className='flex flex-col w-[40%]'>
            <li className='menuItem'><Link href='/'>Home</Link></li>
            <li className='menuItem'><Link href="/tickets">Tickets</Link></li>
            <li className='menuItem'><Link href="/events">Events</Link></li>
            <li className='menuItem'><Link href="/species">Species</Link></li>
            <li className='menuItem'><Link href='/certificate'>Certificates</Link></li>
            <li className='menuItem'><Link href='/contact'>Contact Us</Link></li>
            <li className='menuItem'><Link href='/about'>About Us</Link></li>
            <li className='flex items-center gap-5 menuItem justify-center'>
              <Link href='/signup'>Sign Up</Link>
              <div className="w-[2px] bg-white h-8 select-none opacity-20"></div>
              <Link href='/login'>Log In</Link>
            </li>
          </ul>
      </div>
    </>
  )
}

export default Menu
