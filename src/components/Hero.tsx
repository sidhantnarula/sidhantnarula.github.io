// import React from "react";
// import { Mail, Linkedin, Download, MapPin } from "lucide-react";

// const Hero: React.FC = () => {
//   const researchInterests = [
//     "Machine Learning",
//     "Cybersecurity",
//     "AI Security",
//     "Adversarial Learning",
//     "LLM Security",
//     "Agentic AI Security",
//   ];

//   return (
//     <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-12">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5 dark:opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgb(156,163,175) 1px, transparent 0)",
//             backgroundSize: "32px 32px",
//           }}
//         />
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
//           {/* Profile Image */}
//           <div className="flex justify-center lg:justify-start order-1 lg:order-1">
//             <div className="group w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl">
//               <img
//                 src="/profile.jpg"
//                 alt="Sid N"
//                 className="w-full h-full object-cover transform-gpu will-change-transform
//                            transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
//                            group-hover:scale-[1.04] group-hover:-translate-y-0.5 group-hover:brightness-105
//                            motion-reduce:transform-none motion-reduce:transition-none"
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           {/* Content - Right Side */}
//           <div className="text-center lg:text-left order-2 lg:order-2 lg:pl-0">
//             {/* Greeting */}
//             <div className="mb-4">
//               <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
//                 👋 Hello, I'm
//               </span>
//             </div>

//             {/* Name & Title */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight leading-none">
//               <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-teal-700 dark:from-white dark:via-blue-200 dark:to-teal-200 bg-clip-text text-transparent">
//                 Sidhant Narula
//               </span>
//             </h1>
            
//             <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
//               Ph.D. Student · Computer Science · Old Dominion University
//             </h2>

//             {/* Bio */}
//             <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
//               Ph.D. student at Old Dominion University researching machine learning and security, 
//               including adversarial learning, LLM security, and agentic AI security.
//             </p>

//             {/* Research Interests */}
//             <div className="mb-8">
//               <div className="flex flex-wrap justify-center lg:justify-start gap-3">
//                 {researchInterests.map((interest, index) => (
//                   <span
//                     key={index}
//                     className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
//                   >
//                     {interest}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* CTAs */}
//             <div className="flex flex-wrap justify-center lg:justify-start gap-4">
//               <a
//                 href="mailto:[REPLACE_WITH_EMAIL]"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
//               >
//                 <Mail size={18} />
//                 Email
//               </a>
              
//               <a
//                 href="[REPLACE_WITH_LINKEDIN_URL]"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
//               >
//                 <Linkedin size={18} />
//                 LinkedIn
//               </a>
              
//               <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">
//                 <Download size={18} />
//                 Download CV
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { Mail, Linkedin, Download, MapPin } from "lucide-react";

const Hero: React.FC = () => {
  const researchInterests = [
    
    "AI Security",
    "Adversarial Learning",
    "Generative AI",
    "MCP security",
    "LLM Security",
    "Agentic AI Security",
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(156,163,175) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Light panel wrapper */}
        <div className="rounded-3xl bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur p-6 md:p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 items-center gap-5 md:gap-6">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="group w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Sid N"
                  className="w-full h-full object-cover transform-gpu will-change-transform
                             transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                             group-hover:scale-[1.04] group-hover:-translate-y-0.5 group-hover:brightness-105
                             motion-reduce:transform-none motion-reduce:transition-none"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="text-center lg:text-left order-2 lg:order-2">
              {/* Greeting */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                  👋 Hello, I'm
                </span>
              </div>

              {/* Name & Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight leading-none">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-teal-700 dark:from-white dark:via-blue-200 dark:to-teal-200 bg-clip-text text-transparent">
                  Sidhant Narula
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
                Ph.D. Student · AI Security Researcher · AI Red Teaming
              </h2>

              {/* Bio */}
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Ph.D. specializing in AI security and robustness. Red-teaming large language models and multimodal systems to expose vulnerabilities.
              </p>

              {/* Research Interests */}
              <div className="mb-8">
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {researchInterests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <a
                  href="mailto:[REPLACE_WITH_EMAIL]"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  <Mail size={18} />
                  Email
                </a>

                <a
                  href="https://www.linkedin.com/in/sidhant-narula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-grey dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>

                 <a
                        href="/Sidhant_CV.pdf"
                        download="Sidhant_CV.pdf"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl font-medium transition-all hover:-translate-y-0.5"
                      >
                        <Download size={18} />
                        Download CV
                      </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
