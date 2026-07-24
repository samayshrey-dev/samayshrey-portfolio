import React, { useState } from 'react';
import { Code, Server, Database, MapPin, Cpu, Wrench, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/resumeData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((cat) => cat.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code className="w-5 h-5 text-blue-500" />;
      case 'Frontend Development':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'Backend & Frameworks':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Databases & Storage':
        return <Database className="w-5 h-5 text-amber-500" />;
      case 'Maps, Geospatial & APIs':
        return <MapPin className="w-5 h-5 text-rose-500" />;
      case 'AI Tools & Productivity':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Developer Tools & Workflows':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#0A66C2]" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#0A66C2] dark:text-blue-400 font-semibold">
            Technical Matrix
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills & Competencies
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Categorized technical stack, engineering frameworks, geospatial tooling, and AI-accelerated workflows.
          </p>
          <div className="w-12 h-1 bg-[#0A66C2] rounded-full mx-auto" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#0A66C2] text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 shadow-xl space-y-4 hover:border-[#0A66C2]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-3">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                  {getCategoryIcon(catGroup.category)}
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                  {catGroup.category}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 text-gray-800 dark:text-gray-200 text-xs font-medium hover:border-[#0A66C2] transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#0A66C2] dark:text-blue-400 shrink-0" />
                    <span>{skill.name}</span>
                    {skill.badge && (
                      <span className="ml-1 px-1.5 py-0.5 text-[9px] font-bold rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
