import React from "react";
import Link from "next/link";

const ZooLifetag = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 gap-6">
        <div className="text-green-700 text-xl">zooniverse's lifetag</div>
        <div className="text-7xl font-bold">Discover Species</div>
      </div>

      {/* All images are below here */}
      <div className="flex mt-16 gap-3">
        <div className="w-1/4">
          <Link href="/birds" className="relative group">
            <img src="/images/parrot.png" alt="Birds" className="group-hover:blur-sm group-hover:brightness-90"/>
            <div className="font-medium text-6xl top-0 text-white flex justify-center items-center absolute w-full h-full bg-green-400 duration-200 opacity-0 group-hover:opacity-50">
              <span className=" translate-y-8 transition-transform group-hover:-translate-y-0">BIRDS</span>
            </div>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href="/animals" className="relative group">
            <img src="/images/deer.png" alt="Animals" className="group-hover:blur-sm group-hover:brightness-90"/>
            <div className="font-medium text-6xl top-0 text-white flex justify-center items-center absolute w-full h-full bg-green-400 duration-200 opacity-0 group-hover:opacity-50">
              <span className=" translate-y-8 transition-transform group-hover:-translate-y-0">ANIMALS</span>
            </div>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href="/aquatic" className="relative group">
            <img src="/images/fish.jpg" alt="Aquatic" className="group-hover:blur-sm group-hover:brightness-90"/>
            <div className="font-medium text-6xl top-0 text-white flex justify-center items-center absolute w-full h-full bg-green-400 duration-200 opacity-0 group-hover:opacity-50">
              <span className=" translate-y-8 transition-transform group-hover:-translate-y-0">AQUATICS</span>
            </div>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href="/insects" className="relative group">
            <img src="/images/butterfly.png" alt="Insects" className="group-hover:blur-sm group-hover:brightness-90"/>
            <div className="font-medium text-6xl top-0 text-white flex justify-center items-center absolute w-full h-full bg-green-400 duration-200 opacity-0 group-hover:opacity-50">
              <span className="group-hover:opacity-100 translate-y-8 transition-transform group-hover:-translate-y-0">INSECTS</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ZooLifetag;
