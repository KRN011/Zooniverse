import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="w-full h-646 relative">
        <video className="w-full h-646 object-cover absolute brightness-50" autoPlay loop muted>
          <source src="./videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute flex flex-col mx-20 h-646 justify-center items-center text-7xl text-white select-none max-[1200px]:text-6xl max-[990px]:text-5xl max-md:mx-14 max-[569px]:text-4xl">
          <div className="leading-normal pb-14 max-[455px]:hidden">
            <p className="font-bold">Discover Diverse</p>
            <p className="text-5xl font-light px-1 max-[1200px]:text-4xl max-[990px]:text-3xl max-[569px]:text-2xl">
              <span className="font-bold text-7xl max-[1200px]:text-6xl max-[990px]:text-5xl max-[569px]:text-4xl">Species</span> From
            </p>
            <p className="font-bold">
              Around <span className="text-green-700">THE GLOBE.</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 pb-14 min-[455px]:hidden max-[569px]:text-5xl max-[389px]:text-4xl">
            <p className="font-bold">Discover</p>
            <p className="font-bold">Diverse</p>
            <p className="font-bold">Species</p>
            <p className="text-5xl font-light px-1 max-[1200px]:text-4xl max-[990px]:text-3xl  max-[389px]:text-3xl">From</p>
            <p className="font-bold">
              Around 
            </p>
            <p className="text-green-700 font-extrabold text-5xl max-[389px]:text-4xl">THE GLOBE.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;