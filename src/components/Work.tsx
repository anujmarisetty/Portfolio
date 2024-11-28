import React from "react";
import { Github, ExternalLink, Star } from "lucide-react";

const Work = () => {
  const projects = [
    // {
    //   title: '',
    //   description: '',
    //   tech: ['', '',],
    //   github: 'https://github.com',
    //   external: 'https://example.com',
    //   image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
    // },
    {
      title: "Pdf Assistant",
      description:
        "Utilized LangChain and OpenAI API to process and extract information from PDF documents, providing accurate answers to user queries.",
      tech: ["Python", "LangChain", "OpenAI API", "HuggingFace", "Gradio"],
      github: "https://github.com",
      external: "https://example.com",
      image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Codehort",
      description:
        "A full-stack web platform enabling users to create and manage coding groups with customizable challenges and progress tracking features.",
      tech: [
        "HTML",
        "CSS",
        "React JS",
        "Java Spring Boot",
        "Azure SQL",
        "Firebase",
      ],
      // github: 'https://github.com',
      external:
        "https://vtechworks.lib.vt.edu/items/4d68640d-5285-44d4-a779-34b7c64894a3",
      image:
        "./Portfolio/codehort.jpeg",
    },
    {
      title: "Cricket Data Visualization",
      description:
        "Designed an interactive visualization tool using D3.js and Tableau to display cricket statistics, enhancing the understanding of player performances and partnerships.",
      tech: ["D3.js"],
      github: "https://github.com",
      external: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    },
    {
      title: "Hand Tracking and Volume Control",
      description:
        "Implemented a gesture recognition algorithm to map the distance between the thumb and index finger to system volume adjustments using Python, enabling intuitive and contactless volume control.",
      tech: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com",
      // external: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    },
    {
      title: "Object Detection ",
      description:
        "Built a real-time object detection system using Python and the MobileNet SSD model to identify and label objects in live video streams with high accuracy.",
      tech: ["Python", "MobileNet SSD", "OpenCV"],
      github: "https://github.com",
      // external: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    },
    {
      title: "Online Parking Management System",
      description:
        "An interactive parking map that allows users to view availability and book spots in real-time, enhancing user experience and functionality.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Xampp"],
      github: "https://github.com/anujmarisetty/Parking",
      // external: "https://example.com",
      image:
        "./Portfolio/parking.png",
    },
  ];

  return (
    <section id="work" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Featured Projects</h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">
              <div className="glass-card p-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 text-rose-400">
                      <Star className="w-5 h-5" />
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-300">{project.description}</p>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-rose-400 transition-colors"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-rose-400 transition-colors"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div
                    className={`relative ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-blue-500/20 blur-3xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
