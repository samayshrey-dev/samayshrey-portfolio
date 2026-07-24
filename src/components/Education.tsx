import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { educationList } from '../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#0A66C2] dark:text-blue-400 font-semibold">
            Academic Foundation
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h3>
          <div className="w-12 h-1 bg-[#0A66C2] rounded-full mx-auto" />
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border ${
                edu.id === 'edu-1'
                  ? 'border-[#0A66C2]/60 ring-2 ring-[#0A66C2]/20 shadow-2xl'
                  : 'border-gray-200/80 dark:border-gray-800 shadow-xl'
              } flex flex-col justify-between space-y-6 hover:border-[#0A66C2] transition-all duration-300`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0A66C2] dark:text-blue-400 flex items-center justify-center border border-blue-200 dark:border-blue-800">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
                    {edu.scoreLabel}: {edu.scoreValue}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-sm font-semibold text-[#0A66C2] dark:text-blue-400 mt-1">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {edu.field}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {edu.highlights && (
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                    <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {edu.id === 'edu-1' && (
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 text-center text-xs text-[#0A66C2] dark:text-blue-300 font-medium">
                  Expected Graduation: 2028
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
