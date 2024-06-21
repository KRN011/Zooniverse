import React from "react";
import Link from "next/link";

const ZooEvents = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-16 gap-6">
        <div className="text-7xl font-bold">Zooniverse Events</div>
      </div>

        {/* Event elements */}
      <div className="mt-16 flex justify-evenly gap-3">
        <div className="w-30per">
          <Link href="/events" className="relative group">
            <img src="/images/elephant.jpg" className="group-hover:blur-sm group-hover:brightness-90"/>
            <div className="font-medium text-5xl top-0 text-white flex justify-center items-center absolute w-full h-full text-center  duration-200 bg-green-400 opacity-0 group-hover:opacity-50">
              <span className="w-4/5 translate-y-8 transition-transform group-hover:-translate-y-0">World Elephant Day</span>
            </div>
          </Link>
        </div>
        <div className="w-30per">
          <Link href="/events" className="relative group">
            <img src="/images/monkey.jpg" className="group-hover:blur-sm group-hover:brightness-90"/>
            <div className="font-medium text-5xl top-0 text-white flex justify-center items-center absolute w-full h-full text-center duration-200 bg-green-400 opacity-0 group-hover:opacity-50">
              <span className="w-4/5 translate-y-8 transition-transform group-hover:-translate-y-0">Monkey Save Day</span>
            </div>
          </Link>
        </div>
        <div className="w-30per">
          <Link href="/events" className="relative group">
            <img src="/images/forest.jpg" className="group-hover:blur-sm group-hover:brightness-90"/>
            <div className="font-medium text-5xl top-0 text-white flex justify-center items-center absolute w-full h-full text-center duration-200 bg-green-400 opacity-0 group-hover:opacity-50">
              <span className="w-4/5 translate-y-8 transition-transform group-hover:-translate-y-0">World Environment Day</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ZooEvents;
