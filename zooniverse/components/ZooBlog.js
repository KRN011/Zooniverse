import React from "react";

const ZooBlog = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12 gap-6">
        <div className="text-green-700 text-xl">zoo</div>
        <div className="text-7xl font-bold">Visit our Zoo-Universe</div>
      </div>

      <div className="flex mt-12">
      {/* Left panel of section's div */}
        <div className="w-1/2 flex flex-col items-center translate-x-7">
          <div className="flex items-center justify-center w-4/5">
            <div>
              <img src="/images/cheetah.jpg" />
              <div>
                <div className="flex items-center gap-14 mt-8">
                  <div className="text-2xl font-medium">Animals</div>
                  <div className="text-slate-400">Date: 19 June 2024</div>
                </div>
                <div className="text-4xl font-bold mt-5 text-justify">
                  Conservation of Cheetah's are needed !?
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right panel of section's div */}
        <div className="w-1/2 h-auto flex flex-col items-center -translate-x-7">
          <div className="flex items-center justify-center w-4/5">
            <div>
              <div className="text-justify font-light text-2xl mt-8">
                At Zooniverse we believe in creating connections between people
                and animals, fostering a sense of wonder and responsibility
                towards the natural world. Come and explore our zoo - a place
                where adventure, education, and conservation come together.
              </div>
              <img src="/images/visitors.jpg" alt="" className="mt-14"/>
              <div>
                <div className="flex items-center gap-14 mt-8">
                  <div className="text-2xl font-medium">Facts</div>
                  <div className="text-slate-400">Date: 12 Dec 2023</div>
                </div>
                <div className="text-4xl font-bold mt-5 text-justify">
                Highest peak of visitor's count in Summer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZooBlog;
