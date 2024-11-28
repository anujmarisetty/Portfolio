import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="glass-card p-12">
          <div className="w-16 h-16 mx-auto rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          
          <p className="text-lg text-slate-300 mb-8">
          I'm currently looking for new opportunities.<br></br> Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <a
            href="mailto:anujmarisetty2@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Start a Conversation
            <Send className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;