import React from "react";
import Link from "next/link";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="h-1 w-full bg-green-700"></div>

      {/* upper */}
      <div className="flex justify-between items-center px-52 max-[1250px]:px-36 max-[900px]:px-20 max-md:py-5 max-[625px]:justify-center max-h-20 max-[450px]:px-3">
        <div className="">
          <img
            src="images/logo.png"
            alt=""
            className="w-60 max-lg:w-44 max-md:w-32 mix-blend-multiply max-[625px]:hidden"
          />
        </div>
        <div>
          <ul className="flex gap-8 text-green-700 font-medium max-lg:text-sm max-md:text-xs max-md:gap-5">
            <li className="FootLinks"><Link href='/home'>Home</Link></li>
            <li className="FootLinks"><Link href='/tickets'>Tickets</Link></li>
            <li className="FootLinks"><Link href='/events'>Events</Link></li>
            <li className="FootLinks"><Link href='/species'>Species</Link></li>
            <li className="FootLinks"><Link href='/about'>About Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="h-1px w-3/4 bg-green-700 flex mx-auto opacity-50"></div>

      {/* lower */}
      <div className="m-auto w-3/4 px-5  text-green-700 flex flex-col gap-8 mt-8 max-[625px]:w-full max-[625px]:px-8 mb-5">
        {/* upper */}
        <div className="flex justify-between">
          <div className="text-xl w-2/5 max-lg:text-lg max-[625px]:text-base max-[425px]:text-sm max-[375px]:text-xs">
            INDIA - Nr. SG Highway, SH-69, Imaginagary, Ahmedabad - 121212
          </div>

          <div className="text-xl max-lg:text-lg max-[625px]:text-base max-[425px]:text-sm max-[375px]:text-xs">
            <Link href='https://mail.google.com/' className="duration-150 hover:text-green-400"><div>zooverse@ahmedabad.com</div></Link>
            +91 8769577644
          </div>
        </div>
        {/* lower */}
        <div className="flex justify-between">
          <div className="font-thin max-[500px]:text-sm max-[425px]:text-xs">Copyright © All rights Reserved</div>
          {/* social media icons */}
          <div className="flex gap-3">
            {/* facebook */}
            <Link href='https://www.facebook.com/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 max-[500px]:w-4 fill-current text-green-700 duration-150 transform hover:scale-105">
              <path d="M21.293 24h-4.891a.75.75 0 0 1 0-1.5h4.891c.666 0 1.207-.541 1.207-1.207V2.707c0-.666-.541-1.207-1.207-1.207H2.707c-.666 0-1.207.541-1.207 1.207v18.587c0 .666.541 1.207 1.207 1.207h8.804a.75.75 0 0 1 0 1.499H2.707A2.71 2.71 0 0 1 0 21.293V2.707A2.71 2.71 0 0 1 2.707 0h18.587A2.71 2.71 0 0 1 24 2.707v18.587A2.71 2.71 0 0 1 21.293 24z" />
              <path d="M16.5 24a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h2.415l.625-2.5H16.5a.75.75 0 0 1-.75-.75v-3c0-.965.785-1.75 1.75-1.75h1.25V5h-2.067a4.438 4.438 0 0 0-4.433 4.433v2.817a.75.75 0 0 1-.75.75H9.25v2.5h2.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0V17H8.5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h2.25V9.433A5.94 5.94 0 0 1 16.683 3.5H19.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-2a.253.253 0 0 0-.25.25v2.25h3.25a.747.747 0 0 1 .727.933l-1 4A.749.749 0 0 1 19.5 17h-2.25v6.25a.75.75 0 0 1-.75.75z" />
            </svg></Link>
            {/* instagram */}
            <Link href='https://www.instagram.com'><svg
              viewBox="0 0 16 16"
              className="w-7 max-[500px]:w-4 fill-current text-green-700 duration-150 transform hover:scale-105"
            >
              <path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z" />
              <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z" />
              <circle cx="12.3" cy="3.7" r=".533" />
            </svg></Link>
            {/* linkedin */}
            <Link href='https://www.linkedin.com'><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 144.083 144"
              className="w-8 max-[500px]:w-5 fill-current text-green-700 duration-150 transform hover:scale-105"
            >
              <path d="M72.041 11.166c-33.543 0-60.833 27.29-60.833 60.834 0 33.545 27.29 60.834 60.833 60.834 33.544 0 60.835-27.289 60.835-60.834-.001-33.544-27.292-60.834-60.835-60.834zm0 115.668c-30.235 0-54.833-24.598-54.833-54.834 0-30.235 24.598-54.834 54.833-54.834S126.876 41.765 126.876 72c-.001 30.236-24.6 54.834-54.835 54.834z" />
              <path d="M41.143 59.11h14.078v36.734H41.143z" />
              <ellipse cx="48.042" cy="46.75" rx="7.125" ry="6.5" />
              <path d="M90.608 58.28c-2.883 0-5.326.525-7.334 1.574-2.006 1.05-3.988 2.796-5.949 5.24V59.11h-13.11v36.734h14.078V78.203c0-3.344.531-5.66 1.592-6.952 1.061-1.291 2.443-1.937 4.15-1.937 1.545 0 2.744.479 3.598 1.436.854.957 1.279 2.588 1.279 4.895v20.199h14.148V72.497c0-4.843-1.102-8.423-3.305-10.741-2.2-2.318-5.251-3.476-9.147-3.476z" />
            </svg></Link>
            {/* whatsapp */}
            <Link href='https://www.whatsapp.com'><svg
              viewBox="0 0 24.692 24.763"
              className="w-7 max-[500px]:w-4 fill-current text-green-700 duration-150 transform hover:scale-105"
            >
              <path d="M12.692 0c-6.627 0-12 5.373-12 12 0 2.333.677 4.504 1.829 6.347L0 24.763l6.444-2.533A11.918 11.918 0 0 0 12.692 24c6.627 0 12-5.373 12-12s-5.372-12-12-12zm0 22a9.97 9.97 0 0 1-5.204-1.475l-.849-.52-3.1 1.218 1.211-3.082-.534-.854A9.982 9.982 0 0 1 2.692 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.485 10-10 10z" />
              <path d="M10 14.693c1.368 1.368 4.523 3.358 6.279 2.824s2.019-1.475 2.019-1.475l-.039-1.456-2.863-1s-.637.055-1.504 1.077c-1.165-.155-2.413-1.449-2.413-1.449s-1.294-1.249-1.449-2.413c1.022-.867 1.077-1.504 1.077-1.504l-1-2.863-1.456-.04s-.941.262-1.475 2.019 1.455 4.911 2.824 6.28z" />
            </svg></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
