import React from "react";
import {
  Code,
  Palette,
  Server,
  Cloud,
  Database,
  Layers,
  Globe,
  Edit3,
  Camera,
  Sun,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      name: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      tech: [
        "Python",
        "C/C++",
        "Java",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Go",
      ],
    },
    {
      name: "Frontend Development",
      icon: <Palette className="w-5 h-5" />,
      tech: ["React", "Vue", "HTML/CSS", "Tailwind", "Three.js"],
    },
    {
      name: "Backend Development",
      icon: <Server className="w-5 h-5" />,
      tech: ["Node.js", "PostgreSQL", "MongoDB", "NoSQL", "Xampp"],
    },
    {
      name: "DevOps & Cloud",
      icon: <Cloud className="w-5 h-5" />,
      tech: ["AWS", "Azure", "Docker", "CI/CD", "GIT"],
    },
    {
      name: "Data Science & Machine Learning",
      icon: <Database className="w-5 h-5" />,
      tech: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "OpenCV (Computer Vision)",
      ],
    },
    {
      name: "Visualization & 3D",
      icon: <Layers className="w-5 h-5" />,
      tech: ["Blender", "Tableau", "WebGL", "Observable", "X3D", "Unity"],
    },
    {
      name: "Web Technologies",
      icon: <Globe className="w-5 h-5" />,
      tech: ["REST APIs", "GraphQL", "Postman", "XML", "RegEx"],
    },
    {
      name: "Design & Prototyping",
      icon: <Edit3 className="w-5 h-5" />,
      tech: ["Figma", "AdobeXD", "UI/UX"],
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">About Me</h2>

        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I’m a software engineer who’s passionate about turning
              complex problems into elegant solutions. Over the years, I’ve
              worked on exciting projects ranging from interactive 3D
              visualization platforms to real-world AI and full-stack solutions.
            </p>
            <p className="text-lg">
              Away from the keyboard, you’ll find me behind a camera{" "}
              <span className="inline-block align-middle">
                <Camera className="w-5 h-5 text-rose-500" />
              </span>
              , chasing golden hours, capturing the beauty of the world through my lens, and telling
              stories through pictures.
              Photography is my creative escape and a constant source of inspiration.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-blue-500 rounded-2xl -rotate-6 max-w-[300px] w-full mx-auto"></div>
            <img
              src="/pic.jpg"
              alt="Profile"
              className="relative rounded-2xl w-full h-full object-cover max-w-[300px] w-full mx-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skills.map((skill) => (
            <div key={skill.name} className="glass-card p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.tech.map((item) => (
                  <li key={item} className="text-sm text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
