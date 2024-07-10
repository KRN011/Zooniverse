import React from "react";
import Link from "next/link";
import "./ZooBlog.css";
import Image from "next/image";

const ZooBlog = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12 gap-6">
        <div className="text-green-700 text-xl max-[425px]:text-lg max-[375px]:text-base">zoo</div>
        <div className="text-7xl font-bold max-[990px]:text-6xl max-md:text-5xl max-[600px]:text-4xl max-[425px]:text-3xl max-[375px]:text-2xl">
          Visit our Zoo-Universe
        </div>
      </div>

      {/* paragraph of zoo for '> 550px' */}
      <div className="w-[100vw] flex items-center justify-center mx-auto">
        <div className="text-justify w-[92%] font-light text-base mt-8 min-[550px]:hidden">
          At Zooniverse we believe in creating connections between people and
          animals, fostering a sense of wonder and responsibility towards the
          natural world. Come and explore our zoo - a place where adventure,
          education, and conservation come together.
        </div>
      </div>

      <div className="flex mt-12 gap-7 max-[550px]:mt-8 max-[425px]:flex-col">
        {/* Left panel of section's div */}
        <div className="w-1/3 flex flex-col items-center max-[900px]:w-1/2 max-[425px]:w-full">
          <div className="flex items-center justify-center ml-5 max-[425px]:mr-5">
            <div>
              <Link href="/blogpost">
                <div className="relative overflow-hidden flex justify-center items-center group">
                  <Image
                    src="/images/cheetah.jpg"
                    width={500}
                    height={0}
                    loading="lazy"
                    className="h-[450px] w-[100%] object-cover group-hover:blur-sm group-hover:brightness-900 max-[900px]:h-[400px]"
                  />
                  <div className="blogPost flex justify-center items-center">
                    <h1 className="opacity-0 group-hover:opacity-100 text-white text-4xl font-bold translate-y-8 group-hover:-translate-y-0 transition-transform max-[550px]:text-3xl">
                      READ MORE
                    </h1>
                  </div>
                </div>
              </Link>
              <div>
                <div className="flex items-center justify-between mt-8">
                  <div className="text-2xl font-medium max-[900px]:text-xl max-[550px]:text-lg">
                    Animals
                  </div>
                  <div className="text-slate-400 max-[550px]:text-sm">Date: 19 June 2024</div>
                </div>
                <Link href="/blogpost">
                  <div className="text-4xl font-bold mt-5 text-justify duration-150 hover:text-green-700 max-[900px]:text-3xl max-[550px]:text-2xl">
                    Conservation of Cheetah's are needed !?
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* middle panel of section's div*/}
        <div className="w-1/3 flex flex-col items-center max-[900px]:hidden">
          <div className="flex items-center justify-center">
            <div>
              <div className="text-justify font-light text-xl mb-14 max-lg:text-base max-lg:mb-8">
                At Zooniverse we believe in creating connections between people
                and animals, fostering a sense of wonder and responsibility
                towards the natural world. Come and explore our zoo - a place
                where adventure, education, and conservation come together.
              </div>
              <Link href="/blogpost">
                <div className="relative overflow-hidden flex justify-center items-center group">
                  <Image
                    src="/images/visitors.jpg"
                    width={500}
                    height={0}
                    loading="lazy"
                    className="h-[450px] w-[100%] object-cover group-hover:blur-sm group-hover:brightness-900 max-[900px]:h-[400px]"
                  />
                  <div className="blogPost flex justify-center items-center">
                    <h1 className="opacity-0 group-hover:opacity-100 text-white text-4xl font-bold translate-y-8 group-hover:-translate-y-0 transition-transform max-[550px]:text-3xl">
                      READ MORE
                    </h1>
                  </div>
                </div>
              </Link>
              <div>
                <div className="flex items-center justify-between mt-8">
                  <div className="text-2xl font-medium max-[900px]:text-xl">
                    Facts
                  </div>
                  <div className="text-slate-400">
                    Date: 12 Dec 2023
                  </div>
                </div>
                <Link href="/blogpost">
                  <div className="text-4xl font-bold mt-5 text-justify duration-150 hover:text-green-700 max-[900px]:text-3xl">
                    Highest peak of visitor's count in Summer
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* right panel of section's div */}
        <div className="w-1/3 flex flex-col items-center max-[900px]:w-1/2 max-[425px]:w-full">
          <div className="flex items-center justify-center mr-5 max-[425px]:ml-5">
            <div>
              <div className="text-justify font-light text-xl mb-8 min-[900px]:hidden max-[550px]:hidden max-md:text-lg max-md:mb-6 max-[650px]:mb-4 max-[650px]:text-base">
                At Zooniverse we believe in creating connections between people
                and animals, fostering a sense of wonder and responsibility
                towards the natural world. Come and explore our zoo - a place
                where adventure, education, and conservation come together.
              </div>
              <Link href="/blogpost">
                <div className="relative overflow-hidden flex justify-center items-center group">
                  <Image
                    src="/images/parrot.png"
                    width={500}
                    height={0}
                    loading="lazy"
                    className="h-[450px] w-[100%] object-cover group-hover:blur-sm group-hover:brightness-900 max-[900px]:h-[400px]"
                  />
                  <div className="blogPost flex justify-center items-center">
                    <h1 className="opacity-0 group-hover:opacity-100 text-white text-4xl font-bold translate-y-8 group-hover:-translate-y-0 transition-transform max-[550px]:text-3xl">
                      READ MORE
                    </h1>
                  </div>
                </div>
              </Link>
              <div>
                <div className="flex items-center justify-between mt-8">
                  <div className="text-2xl font-medium max-[900px]:text-xl max-[550px]:text-lg">
                    Birds
                  </div>
                  <div className="text-slate-400 max-[550px]:text-sm">Date: 11 March 2024</div>
                </div>
                <Link href="/blogpost">
                  <div className="text-4xl font-bold mt-5 text-justify duration-150 hover:text-green-700 max-[900px]:text-3xl max-[550px]:text-2xl">
                    Bird of the Week : MACAW
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* middle text */}
      </div>
    </>
  );
};

export default ZooBlog;
