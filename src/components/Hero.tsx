import React from 'react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { personalDetails } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import profilePhoto from '../assets/profile.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Simple Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{personalDetails.status}</span>
            </div>

            {/* Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                {personalDetails.name}
              </h1>

              <p className="text-base sm:text-lg font-medium text-[#0A66C2]">
                Software Engineer • Full Stack Developer • AI/ML Enthusiast
              </p>
            </div>

            {/* Introduction */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl font-normal">
              {personalDetails.objective}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0A66C2] hover:bg-[#084e96] rounded-lg transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-zinc-900 flex items-center gap-4 text-xs text-zinc-400">
              <span className="font-mono text-zinc-500">Connect:</span>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="max-w-xs sm:max-w-sm w-full p-2 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl">
              <img
                src={profilePhoto}
                alt={personalDetails.name}
                className="w-full h-[380px] object-cover object-center rounded-xl"
              />
              <div className="p-3 text-left space-y-0.5">
                <span className="text-xs font-semibold text-white block">Samayshrey Patnaik</span>
                <span className="text-[11px] text-zinc-400 block font-mono">B.Tech CSE (3rd Year) • SRM IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
