import React from 'react';
import { experiences } from '../constants';

const Experience = () => {
  const items = Array.isArray(experiences) ? experiences : []; 

  if (items.length === 0) {
    // Nothing to render; to avoid a crash if the export is missing
    return null;
  }

  return (
    <div id="experience" className="w-full bg-[#0a192f] text-gray-300 pt-24 min-h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold pb-4 text-[#ccd6f6]">Experience</p>
        </div>

        <div className="space-y-6">
          {items.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}-${exp.dates}`}
              className="bg-[#1e293b] shadow-lg shadow-[#040c16] rounded-lg p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl font-bold text-white">
                  {exp.role} <span className="text-pink-500">|</span> {exp.company}
                </h3>
                <p className="text-sm text-gray-400">{exp.location} • {exp.dates}</p>
              </div>

              {exp.summary && <p className="mt-3 text-gray-300">{exp.summary}</p>}

              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                {(exp.points || []).map((pt, idx) => <li key={idx}>{pt}</li>)}
              </ul>

              {(exp.tech || []).length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-pink-800 text-pink-100 rounded-md text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
