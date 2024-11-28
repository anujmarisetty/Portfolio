import React from 'react';
import { Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/20 rounded-full filter blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-6 animate-slide-up">
          <div className="flex items-center gap-2 text-rose-400">
            <Code2 className="w-5 h-5" />
            <p className="font-mono">Welcome to my portfolio</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white space-y-2">
            <span className="block">Anuj Marisetty</span>
          </h1>
          <h1>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-500">
            Full-Stack Developer | Machine Learning Engineer | 3D Visualization Enthusiast
            </span>
          </h1>

          <p className="max-w-xl text-lg text-slate-300">
          I design innovative full-stack applications, build immersive 3D platforms, and develop intelligent machine learning solutions for real-world challenges across industries and academia.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#work"
              className="group px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full flex items-center gap-2 transition-all duration-300"
            >
              View My Work
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 hover:border-rose-400 text-white rounded-full transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;