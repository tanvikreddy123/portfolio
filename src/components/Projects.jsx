import React from 'react';
import { projects } from '../constants';
import { FaGithub } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';
import { CgWebsite } from 'react-icons/cg'; 

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-[#0a192f] text-gray-300 pt-24 min-h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold pb-4 text-[#ccd6f6]">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col bg-[#1e293b] shadow-lg shadow-[#040c16] rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105">
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-white tracking-wider mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-pink-800 text-pink-100 rounded-md text-xs font-semibold">{tag}</span>
                    ))}
                </div>
          
                <p className="text-gray-400 text-sm mt-4">
                    {project.description}
                </p>
              </div>

              <div className="p-6 bg-gray-800 flex justify-center items-center gap-x-8">
                {project.live_demo_link && project.live_demo_link !== '#' && (
                    <a href={project.live_demo_link} target="_blank" rel="noopener noreferrer" className="text-center text-lg font-bold text-white hover:text-pink-400 duration-300 flex items-center gap-2">
                        <CgWebsite size={25}/> Live
                    </a>
                )}
                {project.source_code_link && (
                    <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="text-center text-lg font-bold text-white hover:text-pink-400 duration-300 flex items-center gap-2">
                        <FaGithub size={25}/> Code
                    </a>
                )}
                 {project.publication_link && (
                    <a href={`https://doi.org/${project.publication_link}`} target="_blank" rel="noopener noreferrer" className="text-center text-lg font-bold text-white hover:text-pink-400 duration-300 flex items-center gap-2">
                        <GoBook size={25}/> Publication
                    </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;