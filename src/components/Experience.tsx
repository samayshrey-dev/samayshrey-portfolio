import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/resumeData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#0A66C2]">
            Experience
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work & Internships
          </h3>
        </div>

        <div className="max-w-4xl space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {exp.company}
                  </h4>
                  <p className="text-xs font-medium text-[#0A66C2]">
                    {exp.role}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" /> {exp.period}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" /> {exp.location}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#0A66C2] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-zinc-500 font-mono mr-2">Tech Stack:</span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
