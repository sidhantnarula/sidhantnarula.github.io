import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set document title and meta tags
    document.title = 'Sidhant Narula — Ph.D. Student, Computer Science at ODU';
    
    // Add meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ph.D. student at Old Dominion University researching machine learning and security, including adversarial learning, LLM security, and agentic AI security.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Ph.D. student at Old Dominion University researching machine learning and security, including adversarial learning, LLM security, and agentic AI security.';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Sidhant Narula — Ph.D. Student, Computer Science at ODU' },
      { property: 'og:description', content: 'Ph.D. student at Old Dominion University researching machine learning and security, including adversarial learning, LLM security, and agentic AI security.' },
      { property: 'og:type', content: 'profile' },
      { property: 'profile:first_name', content: 'Sid' },
      { property: 'profile:last_name', content: 'N' }
    ];

    ogTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`);
      if (existing) {
        existing.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sidhant Narula",
      "jobTitle": "Ph.D. Student",
      "affiliation": {
        "@type": "Organization",
        "name": "Old Dominion University"
      },
      "description": "Ph.D. student at Old Dominion University researching machine learning and security, including adversarial learning, LLM security, and agentic AI security.",
      "knowsAbout": [
        "Machine Learning",
        "Cybersecurity", 
        "AI Security",
        "Adversarial Learning",
        "LLM Security",
        "Agentic AI Security"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/sidhant-narula/"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;