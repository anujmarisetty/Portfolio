import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-slate-900/95 backdrop-blur-lg shadow-lg"
            : "py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-500"
            >
              Anuj Marisetty
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full transition-colors"
              >
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute inset-x-0 top-full mt-2 px-6 py-4 bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-link text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full transition-colors text-center"
                >
                  Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Resume Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center">
    <div className="relative bg-white rounded-lg shadow-lg w-[90vw] max-w-6xl h-[90vh]">
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <div className="p-4 h-full">
          <Viewer fileUrl="https://raw.githubusercontent.com/anujmarisetty/Portfolio/main/public/Anuj_Resume.pdf" />
        </div>
      </Worker>
    </div>
    {/* Close Button */}
    <button
      className="absolute top-5 right-5 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      onClick={() => setIsModalOpen(false)}
    >
      <X />
    </button>
  </div>
)}

    </>
  );
};

export default Navbar;
