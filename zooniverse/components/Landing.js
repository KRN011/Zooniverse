import React from "react";
import videoBG from "../src/assets/hero.mp4";

// const videoUrl = "https://youtu.be/cWa4GVcBrcw";

const Landing = () => {
  return (
    <div>
      <div className="w-full h-646 relative">
        {/* <iframe
          className="w-full h-646 absolute pointer-events-none select-none aspect-video"
          src="https://www.youtube.com/embed/cWa4GVcBrcw?si=EskRcbvOqiJpaO1z&amp;controls=0&amp;modestbranding=1&amp;autoplay=1&amp;loop=1&amp;"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay;"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          ></iframe> */}

          {console.log(videoBG)}
          {/* <video src={videoBG} autoPlay muted loop/> */}

        <div className="absolute flex flex-col w-3/5 h-646 justify-center items-center text-7xl text-white">
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
