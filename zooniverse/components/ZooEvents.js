import React from "react";
import Link from "next/link";
import Image from "next/image";

const ZooEvents = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-16 gap-6 max-lg:mt-12">
        <div className="text-7xl font-bold max-[990px]:text-6xl max-md:text-5xl max-[600px]:text-4xl max-[425px]:text-3xl max-[375px]:text-2xl">
          Zooniverse Events
        </div>
      </div>

      {/* Event elements */}
      <div className="mt-16 flex justify-evenly gap-3 max-md:gap-2 max-md:mt-12 max-[600px]:gap-1 mb-16">
        <div className="w-30per">
          <Link href="/events" className="relative group">
            <Image
              src="/images/elephant.jpg"
              width={500}
              height={0}
              loading="lazy"
              className="group-hover:blur-sm group-hover:brightness-90"
            />
            <div className="font-medium text-5xl top-0 text-white flex justify-center items-center absolute w-full h-full text-center  duration-200 bg-green-400 opacity-0 group-hover:opacity-50">
              <span className="w-4/5 translate-y-8 transition-transform group-hover:-translate-y-0">
                World Elephant Day
              </span>
            </div>
          </Link>
        </div>
        <div className="w-30per">
          <Link href="/events" className="relative group">
            <Image
              src="/images/monkey.jpg"
              width={500}
              height={0}
              loading="lazy"
              className="group-hover:blur-sm group-hover:brightness-90"
            />
            <div className="font-medium text-5xl top-0 text-white flex justify-center items-center absolute w-full h-full text-center duration-200 bg-green-400 opacity-0 group-hover:opacity-50">
              <span className="w-4/5 translate-y-8 transition-transform group-hover:-translate-y-0">
                Monkey Save Day
              </span>
            </div>
          </Link>
        </div>
        <div className="w-30per">
          <Link href="/events" className="relative group">
            <Image
              src="/images/forest.jpg"
              width={500}
              height={0}
              loading="lazy"
              className="group-hover:blur-sm group-hover:brightness-90"
            />
            <div className="font-medium text-5xl top-0 text-white flex justify-center items-center absolute w-full h-full text-center duration-200 bg-green-400 opacity-0 group-hover:opacity-50">
              <span className="w-4/5 translate-y-8 transition-transform group-hover:-translate-y-0">
                World Environment Day
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ZooEvents;
