import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="w-full h-646 relative max-[990px]:w-full max-[990px]:h-646">
        <video className="w-full h-646 object-cover absolute brightness-50 max-[990px]:w-full max-[990px]:h-646" autoPlay loop muted>
          <source src="./videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute flex flex-col w-3/5 h-646 justify-center items-center text-7xl text-white select-none">
          <div className="leading-normal pb-14">
            <p className="font-bold">Discover Diverse</p>
            <p className="text-5xl font-light px-1">
              <span className="font-bold text-7xl">Species</span> From
            </p>
            <p className="font-bold">
              Around <span className="text-green-700">THE GLOBE.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;