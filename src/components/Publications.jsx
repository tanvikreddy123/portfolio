import React from 'react';
import { publication } from '../constants';
import { FiExternalLink } from 'react-icons/fi'; 

const Publications = () => {
    
  return (
    <div id="publications" className="w-full bg-[#0a192f] text-gray-300 pt-24">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold pb-4 text-[#ccd6f6]">
            Publications
          </p>
          <p className="mt-1 text-pink-600">Peer-Reviewed Research</p> 
        </div>

        <div className="bg-[#1e293b] shadow-lg shadow-[#040c16] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{publication.title}</h3>
            <p className="text-sm text-gray-400 mb-4 italic">{publication.authors}</p>
            <p className="text-md font-semibold text-gray-200 mb-4">{publication.conference}</p>
            <p className="text-gray-300 mb-4 text-justify">
                <span className='font-bold'>Abstract:</span> {publication.abstract}
            </p>
            
            <a 
                href={`https://doi.org/${publication.doi}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-pink-500 hover:text-pink-400 duration-300 inline-flex items-center gap-2"
            >
                <span>DOI: {publication.doi}</span>
                <FiExternalLink /> 
            </a>
        </div>
      </div>
    </div>
  );
};

export default Publications;