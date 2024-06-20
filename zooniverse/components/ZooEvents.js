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
          <Link href="/events" className="relative">
            <img src="/images/elephant.jpg"/>
            <div className="font-medium text-5xl top-0 text-white flex justify-center items-center absolute w-full h-full text-center invisible">
              World Elephant Day
            </div>
          </Link>
        </div>
        <div className="w-30per">
          <Link href="/events" className="relative">
            <img src="/images/monkey.jpg" />
            <div className="font-medium text-5xl top-0 text-white flex justify-center items-center absolute w-full h-full text-center invisible">
              Monkey Save Day
            </div>
          </Link>
        </div>
        <div className="w-30per">
          <Link href="/events" className="relative">
            <img src="/images/forest.jpg" />
            <div className="font-medium text-5xl top-0 text-white flex justify-center items-center absolute w-full h-full text-center invisible">
              World Environment Day
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ZooEvents;
