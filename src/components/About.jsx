import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center">
      <div className="flex flex-col justify-center items-center w-full h-full p-4">
        <div className="max-w-[1000px] w-full pb-8">
          <div className="text-left">
            <p className="text-3xl font-bold pb-4 text-[#ccd6f6]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold">
            <p>A passionate developer building secure, scalable, and user-focused solutions.</p>
          </div>
          <div>
            <p className="text-[#8892b0]">
              I’m a Full Stack Developer who enjoys building secure, scalable, and user-friendly applications. From AI-powered health apps to financial dashboards and cloud-native systems, I work across the stack with Java, Spring Boot, Node.js, React, and cloud platforms like AWS and Azure — always exploring how modern tech and AI can create solutions that make an impact.
            </p>
            <div className='mt-6'>
                <a 
                    href="/Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 max-w-fit"
                >
                    View Full Resume
                    <span className="ml-2 group-hover:rotate-6 duration-300">
                        <FiExternalLink />
                    </span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;