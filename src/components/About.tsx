import React from 'react';
import { Download, GraduationCap, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Background
            </h3>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently pursuing a Ph.D. in the Computer Science Department at Old Dominion University, Norfolk. 
                Previously completed a B.E. in Electronics and Computer Engineering at the Thapar Institute of 
                Engineering and Technology, India.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Research interests include machine learning, cybersecurity, AI security, adversarial learning, 
                LLM security, and agentic AI security. Passionate about developing robust and secure AI systems 
                that can withstand adversarial attacks and operate safely in real-world environments.
              </p>
            </div>
            
            <a
        href="/Sidhant_CV.pdf"
        download="Sidhant_CV.pdf"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
      >
        <Download size={18} />
        Download CV
      </a>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap size={24} />
              Education
            </h3>
            
            <div className="space-y-8">
              {/* PhD */}
              <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Ph.D., Computer Science
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    Old Dominion University
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>2024 – Present</span>
                  </div>
                </div>
              </div>

              {/* Bachelor's */}
              <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    B.E., Electronics and Computer
                  </h4>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">
                    Thapar Institute of Engineering and Technology
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>2019 – 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;