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
          <Link href="/birds" className="relative">
            <img src="/images/parrot.png" alt="Birds" />
            <div className="font-medium text-6xl top-0 text-white flex justify-center items-center absolute w-full h-full invisible">
              Birds
            </div>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href="/animals" className="relative">
            <img src="/images/deer.png" alt="Animals" />
            <div className="font-medium text-6xl top-0 text-white flex justify-center items-center absolute w-full h-full invisible">
              Animals
            </div>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href="/aquatic" className="relative">
            <img src="/images/fish.jpg" alt="Aquatic" />
            <div className="font-medium text-6xl top-0 text-white flex justify-center items-center absolute w-full h-full invisible">
              Aquatic
            </div>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href="/insects" className="relative">
            <img src="/images/butterfly.png" alt="Insects" />
            <div className="font-medium text-6xl top-0 text-white flex justify-center items-center absolute w-full h-full invisible">
              Insects
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ZooLifetag;
