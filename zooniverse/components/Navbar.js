import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-24 flex justify-between items-center ml-20">
      <div className="logo w-72 mix-blend-multiply">
        <img src="/images/logo.png" alt="Zooniverse" />
      </div>
      <ul className="flex flex-row gap-12 text-lg text-green-700">
        <li><Link href='/home'>Home</Link></li>
        <li><Link href='/tickets'>Tickets</Link></li>
        <li><Link href='/events'>Events</Link></li>
        <li><Link href='/species'>Species</Link></li>
        <li><img src="/images/down-arrow.svg" className="fill-green-700"/></li>
      </ul>
      <ul className="flex flex-row gap-6 mr-20 text-lg text-green-700">
        <li><Link href='/login'>Log In</Link></li>
        <li><div className="w-1 bg-green-700 h-8 opacity-50"></div></li>
        <li><Link href='/signup'>Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
