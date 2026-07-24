import React from 'react';
import { X, Download, ExternalLink, Mail, Phone, MapPin, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { personalDetails, experiences, projects, skillCategories, educationList, achievements } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 border border-gray-800 text-gray-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950/80 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-sm">
              SP
            </div>
            <div>
              <h3 className="font-semibold text-white">Samayshrey Patnaik - Resume</h3>
              <p className="text-xs text-gray-400">Official Curriculum Vitae (2026)</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#0A66C2] hover:bg-[#004182] rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" /> Download / Print PDF
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-gray-400 hover:text-white bg-gray-800/80 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 bg-gray-900 text-xs md:text-sm font-sans">
          {/* Header Banner */}
          <div className="border-b border-gray-800 pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{personalDetails.name}</h1>
                <p className="text-[#0A66C2] font-medium text-base mt-1">Aspiring Software Engineer & Full Stack Developer</p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" /> {personalDetails.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> {personalDetails.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> {personalDetails.location}
                </span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-gray-950/60 border border-gray-800 text-gray-300 italic text-xs">
              "{personalDetails.objective}"
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[#0A66C2] uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="grid gap-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-gray-950/50 border border-gray-800/80 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-white text-sm">{edu.institution}</h3>
                    <p className="text-xs text-gray-400">{edu.degree} — {edu.field}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-medium text-xs border border-blue-500/20">
                      {edu.scoreLabel}: {edu.scoreValue}
                    </span>
                    <p className="text-[11px] text-gray-500 mt-1">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship & Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[#0A66C2] uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Internship Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-gray-950/50 border border-gray-800 space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm flex items-center gap-2">
                        {exp.company} <span className="text-xs font-normal text-blue-400">({exp.role})</span>
                      </h3>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-xs">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="leading-relaxed">{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] rounded bg-gray-800 text-gray-300 border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[#0A66C2] uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Featured Projects
            </h2>
            <div className="grid gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-gray-950/50 border border-gray-800 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-white text-sm">{proj.title} <span className="text-xs font-normal text-gray-400">— {proj.subtitle}</span></h3>
                    </div>
                    <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">{proj.period}</span>
                  </div>
                  <p className="text-xs text-gray-300">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] rounded bg-gray-800 text-gray-300 border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Overview */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[#0A66C2] uppercase tracking-wider">Skills Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="p-3 rounded-xl bg-gray-950/50 border border-gray-800">
                  <span className="text-xs font-semibold text-gray-300 block mb-1.5">{cat.category}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="px-2 py-0.5 text-[11px] rounded bg-gray-800 text-gray-300">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[#0A66C2] uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" /> Awards & Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {achievements.map((ach) => (
                <div key={ach.id} className="p-3 rounded-xl bg-gray-950/50 border border-gray-800">
                  <span className="font-bold text-white text-xs block">{ach.title}</span>
                  <span className="text-[11px] text-blue-400 block mb-1">{ach.subtitle}</span>
                  <p className="text-[11px] text-gray-400">{ach.description[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-gray-800 bg-gray-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
