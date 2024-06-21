"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <nav className="h-24 w-full flex overflow-hidden justify-between items-center max-lg:h-20 min-[990px]:w-full">
      <div className="logo w-72 mix-blend-multiply max-lg:w-44 max-[1400px]:w-60">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Zooniverse"
            className="select-none ml-20 max-lg:ml-14"
          />
        </Link>
      </div>
      <ul className="flex flex-row gap-12 text-lg text-green-700 max-lg:text-base max-lg:gap-9 max-md:invisible max-[1200px]:pl-24 max-[1200px]:text-base lg:max-[1200px]:gap-6">
        <li className="NavLinks">
          <Link href="/home">Home</Link>
        </li>
        <li className="NavLinks">
          <Link href="/tickets">Tickets</Link>
        </li>
        <li className="NavLinks">
          <Link href="/events">Events</Link>
        </li>
        <li className="NavLinks max-[900px]:hidden">
          <Link href="/species">Species</Link>
        </li>
        <li className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              "w-7 fill-current select-none text-green-700 cursor-pointer hover:translate-y-[2px] duration-200 max-lg:w-6 max-md:invisible  max-[1200px]:w-6 " +
              (open ? "rotate-180" : "")
            }
            viewBox="0 -960 960 960"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
          {/* drop down menu items */}
          <div
            ref={menuRef}
            className={
              "dropDownMenu absolute w-64 bg-white z-10 mt-[80px] flex rounded-lg justify-center items-center px-3 py-4 max-lg:w-52 max-lg:px-2 max-md:invisible " +
              (open ? "active" : "inactive")
            }
          >
            <ul className="flex flex-col items-center">
              <DropDownMenu items={"Contact Us"} link={"/contact"} />
              <DropDownMenu items={"Certificates"} link={"/certificates"} />
              <DropDownMenu items={"About Us"} link={"/about"} />
            </ul>
          </div>
        </li>
      </ul>

      <ul className="flex flex-row gap-6 mr-20 text-lg text-green-700 max-lg:gap-5 max-lg:text-base max-md:invisible max-[1200px]:text-base min-[900px]:max-[990px]:mr-0">
        <li className="duration-100 transform transition hover:scale-105 hover:font-medium">
          <Link href="/login" className="select-none ">
            Log In
          </Link>
        </li>
        <li>
          <div className="w-[2px] bg-green-700 h-8 select-none opacity-50 max-lg:h-6 max-[1200px]:h-6"></div>
        </li>
        <li className="duration-100 transform transition hover:scale-105 hover:font-medium">
          <Link href="/signup" className="select-none">
            Sign Up
          </Link>
        </li>
      </ul>

      {/* Hamburger settings */}
      <div className="md:hidden">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-6 mr-14 fill-current text-green-700">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

function DropDownMenu(props) {
  return (
    <>
      <Link
        href={props.link}
        className="text-lg py-3 [&:not(:last-child)]:border-b border-b-green-300 max-lg:text-base"
      >
        <li className="transform hover:scale-105 duration-150 hover:font-medium">
          {props.items}
        </li>
      </Link>
    </>
  );
}

export default Navbar;
