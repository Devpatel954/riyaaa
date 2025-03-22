import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-4xl mx-auto lg:mx-0 space-y-8 animate-fadeIn">
          <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
            <span>Software Developer</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="text-indigo-600">Riya Mehta</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl">
            A passionate software developer specializing in creating intuitive
            and efficient web applications. Currently pursuing a Master's in
            Computer Science at the University of Illinois Chicago.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors duration-300 hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-full hover:bg-indigo-50 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center space-x-6 pt-2">
            <a
              href="https://github.com/riyagmehta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/riya-mehta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mriya842@gmail.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center text-gray-500 hover:text-indigo-600 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
