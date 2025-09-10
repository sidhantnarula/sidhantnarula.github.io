import React from 'react';
import { Code, Database, Brain, GitBranch, Globe, Server } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <Code size={24} />,
      skills: ['Python', 'C/C++', 'Java'],
      color: 'blue'
    },
    {
      title: 'Data/ML',
      icon: <Brain size={24} />,
      skills: ['NumPy', 'Pandas', 'scikit-learn', 'PyTorch', 'Keras', 'TensorFlow', 'Hugging Face', 'Matplotlib'],
      color: 'purple'
    },
    {
      title: 'ML Concepts',
      icon: <Brain size={24} />,
      skills: ['Machine Learning', 'Deep Learning', 'Optimization', 'Fine-tuning', 'Large Language Models', 'Multi-Modal', 'Retrieval-Augmented Generation (RAG)', 'Prompt Tuning'],
      color: 'indigo'
    },
    {
      title: 'DevOps/MLOps',
      icon: <GitBranch size={24} />,
      skills: ['Git', 'GitHub', 'CI/CD', 'MLOps', 'Distributed Training'],
      color: 'green'
    },
    {
      title: 'Web',
      icon: <Globe size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript'],
      color: 'orange'
    },
    {
      title: 'Data/DB',
      icon: <Database size={24} />,
      skills: ['SQL', 'DBMS', 'SQL Server'],
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
      purple: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
      indigo: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20',
      green: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
      orange: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20',
      teal: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 dark:text-blue-400',
      purple: 'text-purple-600 dark:text-purple-400',
      indigo: 'text-indigo-600 dark:text-indigo-400',
      green: 'text-green-600 dark:text-green-400',
      orange: 'text-orange-600 dark:text-orange-400',
      teal: 'text-teal-600 dark:text-teal-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getSkillChipClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      purple: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700',
      green: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700',
      orange: 'bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700',
      teal: 'bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 ${getColorClasses(category.color)} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={getIconColorClasses(category.color)}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1.5 text-sm font-medium rounded-full border ${getSkillChipClasses(category.color)} transition-colors hover:shadow-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional proficiency note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Proficiency levels range from foundational knowledge to advanced expertise across different domains
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;