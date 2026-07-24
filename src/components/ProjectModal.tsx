import React from 'react';
import { X, CheckCircle, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
          <div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <p className="text-xs text-zinc-400">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh]">
          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Project Overview</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 mb-3">Key Features & Architecture</h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#0A66C2] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#0A66C2] hover:bg-[#084e96] rounded-lg transition-colors"
          >
            <GithubIcon className="w-4 h-4" /> View Source Code on GitHub
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white bg-zinc-800 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
