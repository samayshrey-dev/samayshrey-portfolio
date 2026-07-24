import React from 'react';
import { GraduationCap, Code2, Cpu } from 'lucide-react';
import { aboutHighlights } from '../data/resumeData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-zinc-950/60 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#0A66C2]">
            Background
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h3>
        </div>

        {/* Bio Text */}
        <div className="p-6 sm:p-8 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-4 max-w-4xl">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            I am a third-year Computer Science Engineering student at{' '}
            <strong className="text-white">SRM Institute of Science and Technology</strong> with a{' '}
            <span className="text-[#0A66C2] font-semibold">CGPA of 8.51/10</span>. I enjoy designing and developing scalable web applications while exploring Artificial Intelligence, backend systems, and modern software engineering practices.
          </p>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Currently seeking <strong className="text-white">Software Engineering</strong> and{' '}
            <strong className="text-white">Full Stack Development internship</strong> opportunities where I can contribute to meaningful products and continue learning from experienced engineers.
          </p>
        </div>

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {aboutHighlights.map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-800 text-[#0A66C2] flex items-center justify-center">
                {card.icon === 'GraduationCap' && <GraduationCap className="w-5 h-5" />}
                {card.icon === 'Code2' && <Code2 className="w-5 h-5" />}
                {card.icon === 'Cpu' && <Cpu className="w-5 h-5" />}
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">
                  {card.title}
                </h4>
                <p className="text-xs text-[#0A66C2] font-medium mt-0.5">
                  {card.subtitle}
                </p>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
