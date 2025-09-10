// import React from 'react';
// import { FileText, ExternalLink, Calendar } from 'lucide-react';

// interface Publication {
//   title: string;
//   authors: string;
//   venue: string;
//   type: 'journal' | 'conference' | 'extended-abstract';
//   year?: string;
//   url?: string;
// }

// const Publications: React.FC = () => {
//   const publications: Publication[] = [
//     {
//       title: "Exploring Research and Tools in AI Security: A Systematic Mapping Study",
//       authors: "S. Narula, M. Ghasemigol, J. Carnerero-Cano, A. Minnich, E. Lupu and D. Takabi",
//       venue: "IEEE Access (Journal)",
//       type: "journal"
//     },
//     {
//       title: "NEXUS: Network Exploration for eXploiting Unsafe Sequences",
//       authors: "S. Narula et al.",
//       venue: "EMNLP Conference",
//       type: "conference"
//     },
//     {
//       title: "A Framework for Adaptive Multi-Turn Jailbreak Attacks on Large Language Models",
//       authors: "S. Narula et al.",
//       venue: "CAMLIS (Extended Abstract)",
//       type: "extended-abstract"
//     }
//   ];

//   const getTypeColor = (type: string) => {
//     switch (type) {
//       case 'journal':
//         return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700';
//       case 'conference':
//         return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700';
//       case 'extended-abstract':
//         return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700';
//       default:
//         return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
//     }
//   };

//   const getTypeLabel = (type: string) => {
//     switch (type) {
//       case 'journal':
//         return 'Journal';
//       case 'conference':
//         return 'Conference';
//       case 'extended-abstract':
//         return 'Extended Abstract';
//       default:
//         return 'Publication';
//     }
//   };

//   return (
//     <section id="publications" className="py-24">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
//           Publications
//         </h2>

//         <div className="space-y-8">
//           {publications.map((pub, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
//                 <div className="flex-1">
//                   <div className="flex items-start gap-3 mb-3">
//                     <FileText size={20} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
//                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">
//                       {pub.title}
//                     </h3>
//                   </div>
                  
//                   <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
//                     {pub.authors}
//                   </p>
                  
//                   <p className="text-gray-600 dark:text-gray-400 mb-4">
//                     {pub.venue}
//                   </p>
//                 </div>

//                 <div className="flex flex-col items-start sm:items-end gap-2">
//                   <span className={`px-3 py-1.5 text-sm font-medium rounded-full border ${getTypeColor(pub.type)}`}>
//                     {getTypeLabel(pub.type)}
//                   </span>
                  
//                   {pub.year && (
//                     <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
//                       <Calendar size={16} />
//                       <span className="text-sm">{pub.year}</span>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {pub.url && (
//                 <div className="flex justify-end">
//                   <a
//                     href={pub.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
//                   >
//                     <ExternalLink size={16} />
//                     View Publication
//                   </a>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Note about publications */}
//         <div className="mt-12 text-center">
//           <p className="text-gray-600 dark:text-gray-400 text-sm">
//             Publications are listed in reverse chronological order. Links will be added upon publication.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Publications;
import React from 'react';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  type: 'Journal' | 'Conference' | 'Extended Abstract';
  link?: string;
  year?: string;
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      title: "Exploring Research and Tools in AI Security: A Systematic Mapping Study",
      authors: "S. Narula, M. Ghasemigol, J. Carnerero-Cano, A. Minnich, E. Lupu and D. Takabi",
      venue: "IEEE Access",
      type: "Journal",
      link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10988535"
    },
    {
      title: "NEXUS: Network Exploration for eXploiting Unsafe Sequences",
      authors: "S. Narula et al.",
      venue: "EMNLP Conference",
      type: "Conference",
      link: "https://openreview.net/pdf?id=ik7iURL0is"
    },
    {
      title: "A Framework for Adaptive Multi-Turn Jailbreak Attacks on Large Language Models (CAMLIS)",
      authors: "S. Narula et al.",
      venue: "CAMLIS Workshop",
      type: "Extended Abstract"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Journal':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700';
      case 'Conference':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700';
      case 'Extended Abstract':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <section id="publications" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Publications
        </h2>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <FileText size={20} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                      {pub.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    {pub.authors}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {pub.venue}
                  </p>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-3">
                  <span className={`px-3 py-1.5 text-sm font-medium rounded-full border ${getTypeColor(pub.type)}`}>
                    {pub.type}
                  </span>
                  
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      View Paper
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            More publications coming soon. Links will be added upon publication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;