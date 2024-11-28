import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Virginia Tech',
      position: 'Developer',
      period: 'Mar 2024 - Present',
      duties: [
        'Developed a React-based web application powered by THREE.js and WebGL, enabling interactive visualization of complex X3D models, making research data more accessible and interactive for multidisciplinary teams.',
        'Developed a 3D simulation platform as part of a National Science Foundation (NSF) project, simplifying how researchers and students understand wireless communication systems in both academic and industry settings.',
        'Contributed to the 3D Roanoke Project, using high-resolution LiDAR data and CityEngine-generated 3D city models to simulate flood propagation scenarios, providing insights for disaster preparedness and urban planning.',
        'Worked closely with researchers and faculty to design visualization tools tailored to specific research needs, empowering teams to adapt 3D and VR content for their unique challenges and goals.',
      ],
    },
    {
      company: 'TCS',
      position: 'Software Engineer– Systems Engineer',
      period: 'Aug 2021 – Dec 2022',
      duties: [
        'Created OCR solutions to streamline data analysis for financial and insurance firms, increasing efficiency by 20%.',
        'Engineered Machine learning models to process data from documents using OpenCV, Pandas, and RegEx, achieving a 92% accuracy rate and also conducted rigorous testing and validation of OCR models to ensure accuracy and reliability.',
        'Processed and analyzed large volumes of text data, applying techniques like tokenization, named entity recognition (NER), and text normalization to structure critical fields such as policy numbers, claim amounts, and many more.',
        'Worked closely with the production department in deploying, debugging, and maintaining OCR applications, ensuring seamless operation in a live environment.',
      ],
    },
    {
      company: 'Entrench Electronics',
      position: 'Artificial Intelligence and Machine learning Intern',
      period: 'Jun 2019 – Jul 2019',
      duties: [
        'Designed and implemented a conversational AI chatbot using Python and the NLTK library.',
        'Explored multiple datasets using data mining techniques to get insights and patterns for chatbot development',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Experience</h2>

        <div className="glass-card p-8">
          <div className="grid md:grid-cols-[200px,1fr] gap-8">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  className={`px-6 py-4 text-left whitespace-nowrap transition-all duration-300 ${
                    activeTab === index
                      ? 'text-rose-400 bg-white/5 rounded-lg'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experiences[activeTab].position}
                  </h3>
                  <p className="text-rose-400">{experiences[activeTab].period}</p>
                </div>
              </div>

              <ul className="space-y-4">
                {experiences[activeTab].duties.map((duty, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-rose-400">▹</span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;