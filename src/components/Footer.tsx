import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 font-mono text-sm">
            Designed & Built with ❤️
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/anujmarisetty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-rose-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anuj-marisetty/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-rose-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-rose-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;