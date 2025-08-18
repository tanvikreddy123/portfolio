import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold">
          Tanvik Reddy Kotha
        </h1>
        <h2 className="text-xl sm:text-3xl font-bold text-[#8892b0] mt-4">
          I'm a Full Stack Developer.
        </h2>
        

        <div className='mt-8'>
          <a href="#projects" className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 max-w-fit">
            View My Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;