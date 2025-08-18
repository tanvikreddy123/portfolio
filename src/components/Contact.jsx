import React from 'react';
import { contactInfo } from '../constants';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-24">
      <div className='flex flex-col max-w-[600px] w-full'>
          <div className="pb-8 text-center">
              <p className="text-3xl font-bold pb-4 text-[#ccd6f6]">Contact</p>
          </div>
          
          <div className='text-center space-y-8'>
            
            <div className='flex items-center justify-center gap-x-8'>
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-gray-300 hover:text-pink-600 hover:scale-110 duration-300'
                aria-label="GitHub Profile"
              >
                <FaGithub size={40} />
              </a>
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-gray-300 hover:text-pink-600 hover:scale-110 duration-300'
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={40} />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className='text-gray-300 hover:text-pink-600 hover:scale-110 duration-300'
                aria-label="Send an Email"
              >
                <HiOutlineMail size={45} />
              </a>
            </div>

          </div>
      </div>
    </div>
  );
};

export default Contact;