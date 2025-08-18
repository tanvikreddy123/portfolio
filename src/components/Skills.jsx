import React from 'react';
import { skills } from '../constants';

const Skills = () => {
  return (
    <div id="skills" className="w-full bg-[#0a192f] text-gray-300 pt-24 min-h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl font-bold pb-4 text-[#ccd6f6]">Skills</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center py-8">
          {skills.map((skillCategory) => (
            <div key={skillCategory.category} className="shadow-lg shadow-[#040c16] bg-[#1e293b] rounded-lg p-4">
              <h3 className="text-xl font-bold text-pink-500 mb-4 border-b-2 border-pink-700 pb-2">{skillCategory.category}</h3>
              
              <ul className="text-left space-y-3 pt-2">
                {skillCategory.items.map((item) => (
                  <li key={item.name} className="flex items-center">
                    <span className="w-8 flex-shrink-0">
                      {item.icon && <item.icon size={20} />}
                    </span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;