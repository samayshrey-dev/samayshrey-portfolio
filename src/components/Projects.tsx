import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { projects } from '../data/resumeData';
import { ProjectItem } from '../types';
import { GithubIcon } from './SocialIcons';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-16 bg-zinc-950/60 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#0A66C2]">
            Portfolio
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Featured Projects
          </h3>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-xl bg-zinc-900/60 border border-zinc-800 p-6 justify-between space-y-6 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                    {project.badge || project.category}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {project.period}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[#0A66C2] font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">Key Features:</span>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {project.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#0A66C2] font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors border border-zinc-700/60"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#0A66C2] hover:bg-[#084e96] rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
