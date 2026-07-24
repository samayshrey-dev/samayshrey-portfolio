import React from 'react';
import { Trophy, Award, Zap, Music, Star, ExternalLink } from 'lucide-react';
import { achievements } from '../data/resumeData';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'Music':
        return <Music className="w-6 h-6 text-rose-400" />;
      default:
        return <Star className="w-6 h-6 text-[#0A66C2]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50/50 dark:bg-gray-950/40 border-y border-gray-200/60 dark:border-gray-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#0A66C2] dark:text-blue-400 font-semibold">
            Honors & Recognition
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Awards & Achievements
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Hackathons, technical expos, national quizzes, and co-curricular leadership highlights.
          </p>
          <div className="w-12 h-1 bg-[#0A66C2] rounded-full mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl space-y-4 hover:border-[#0A66C2]/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-[#0A66C2] dark:text-blue-400 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0A66C2] font-bold mt-0.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-[11px] font-mono text-gray-400">
                <span>Verified Recognition</span>
                <span>Year {item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
