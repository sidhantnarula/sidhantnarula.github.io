import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  location?: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Graduate Research Assistant',
      organization: 'Old Dominion University',
      location: 'Norfolk, VA',
      period: 'Jan 2024 – Present',
      current: true,
      bullets: [
        'Conducting research in AI security and Red teamings closed and open source LLMs.',
        'Investigating vulnerabilities in large language models and agentic AI systems',
        'Implemented Retrieval-Augmented Generation (RAG) pipelines with LlamaIndex, demonstrating distributed training and integration with LLaMA'
      ]
    },
    {
      title: 'Software Engineer',
      organization: 'HSBC',
      period: 'Aug 2023 – Jan 2024',
      bullets: [
        'Developed and maintained microservices using Spring Boot, enhancing the scalability and performance of the overall application architecture',
        'Collaborated with cross-functional teams on product development',
        'Created machine learning algorithms to accurately forecast bond prices, utilizing Python and relevant libraries such as TensorFlow and scikit-learn, contributing to more informed financial decision-making'
        
      ]
    },
    {
      title: 'Software Engineer Intern',
      organization: 'Nucleus Software',
      period: 'Jan 2023 – Jun 2023',
      bullets: [
        'Contributed to development of fintech applications and services',
        'Collaborated on a SAML Single Sign-On (SSO) project, implementing a robust and secure authentication and authorization framework',
        'Developed RESTful APIs to enhance data exchange and integration between different systems, improving overall efficency'
      ]
    },
    {
      title: 'Research Intern',
      organization: 'University of Georgia (UGA)',
      location: 'Athens, GA',
      period: 'Jun 2022 – Aug 2022',
      bullets: [
        'Developed RNA binding site prediction algorithm using a Deep Learning Model and tested it.',
        'Attended training sessions of Sapelo2 - high performance computing cluster and processed Big Data',
        'Establish the LISE web server for predicting small molecules binding sites on protein.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full hidden md:block -translate-x-2">
                  {exp.current && (
                    <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping"></div>
                  )}
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-2">
                        {exp.organization}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      )}
                      {exp.current && (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2.5 flex-shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;