import React from "react";
import Link from "next/link";
import "./ZooBlog.css";

const ZooBlog = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12 gap-6">
        <div className="text-green-700 text-xl">zoo</div>
        <div className="text-7xl font-bold">Visit our Zoo-Universe</div>
      </div>

      <div className="flex mt-12">
        {/* Left panel of section's div */}
        <div className="w-1/3 flex flex-col items-center ">
          <div className="flex items-center justify-center w-4/5">
            <div>
            <Link href='/blogpost'><div className="relative overflow-hidden group">
                <img src="/images/cheetah.jpg" className="group-hover:blur-sm group-hover:brightness-900"/>
                <div className="blogPost flex justify-center items-center">
                  <h1 className="opacity-0 group-hover:opacity-100 text-white text-4xl font-bold translate-y-8 group-hover:-translate-y-0 transition-transform">READ MORE</h1>
                </div>
              </div></Link>
              <div>
                <div className="flex items-center gap-14 mt-8">
                  <div className="text-2xl font-medium">Animals</div>
                  <div className="text-slate-400">Date: 19 June 2024</div>
                </div>
                <Link href='/blogpost'><div className="text-4xl font-bold mt-5 text-justify duration-150 hover:text-green-700">
                  Conservation of Cheetah's are needed !?
                </div></Link>
              </div>
            </div>
          </div>
        </div>
        {/* middle panel of section's div*/}
        <div className="w-1/3 h-auto flex flex-col items-center ">
          <div className="flex items-center justify-center w-4/5">
            <div>
              <div className="text-justify font-light text-2xl mb-14">
                At Zooniverse we believe in creating connections between people
                and animals, fostering a sense of wonder and responsibility
                towards the natural world. Come and explore our zoo - a place
                where adventure, education, and conservation come together.
              </div>
              <Link href='/blogpost'><div className="relative overflow-hidden group">
              <img src="/images/visitors.jpg" className="group-hover:blur-sm group-hover:brightness-900"/>
                <div className="blogPost flex justify-center items-center">
                  <h1 className="opacity-0 group-hover:opacity-100 text-white text-4xl font-bold translate-y-8 group-hover:-translate-y-0 transition-transform">READ MORE</h1>
                </div>
              </div></Link>
              <div>
                <div className="flex items-center gap-14 mt-8">
                  <div className="text-2xl font-medium">Facts</div>
                  <div className="text-slate-400">Date: 12 Dec 2023</div>
                </div>
                <Link href='/blogpost'><div className="text-4xl font-bold mt-5 text-justify duration-150 hover:text-green-700">
                  Highest peak of visitor's count in Summer
                </div></Link>
              </div>
            </div>
          </div>
        </div>
        {/* right panel of section's div */}
        <div className="w-1/3 flex flex-col items-center ">
          <div className="flex items-center justify-center w-4/5">
            <div>
            <Link href='/blogpost'><div className="relative overflow-hidden group">
                <img src="/images/parrot.png" className="h-648 object-cover group-hover:blur-sm group-hover:brightness-900" />
                <div className="blogPost flex justify-center items-center">
                  <h1 className="opacity-0 group-hover:opacity-100 text-white text-4xl font-bold translate-y-8 group-hover:-translate-y-0 transition-transform">READ MORE</h1>
                </div>
              </div></Link>
              <div>
                <div className="flex items-center gap-14 mt-8">
                  <div className="text-2xl font-medium">Birds</div>
                  <div className="text-slate-400">Date: 11 March 2024</div>
                </div>
                <Link href='/blogpost'><div className="text-4xl font-bold mt-5 text-justify duration-150 hover:text-green-700">
                  Bird of the Week : MACAW
                </div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZooBlog;
