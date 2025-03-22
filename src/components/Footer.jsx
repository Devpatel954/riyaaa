import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full mb-8 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>

          <h2 className="text-3xl font-bold mb-6">
            Riya<span className="text-blue-500">.</span>
          </h2>

          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/riyagmehta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/riya-mehta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mriya842@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Riya Mehta. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
