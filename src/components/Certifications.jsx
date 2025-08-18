import React from 'react';
import { certifications } from '../constants';
import { FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  return (
    <div id="certifications" className="w-full bg-[#0a192f] text-gray-300 pt-24">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold pb-4 text-[#ccd6f6]">
            Certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
                <a 
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-[#1e293b] p-6 rounded-lg shadow-lg shadow-[#040c16] flex justify-between items-center group ${cert.link !== '#' ? 'hover:bg-pink-900/50 cursor-pointer' : 'cursor-default'} transition-colors duration-300`}
                >
                    <div>
                        <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                        <p className="text-gray-400">{cert.issuer}</p>
                    </div>
                    {cert.link !== '#' && (
                        <FiExternalLink className="text-gray-400 group-hover:text-pink-400 transition-colors duration-300" size={20}/>
                    )}
                </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;