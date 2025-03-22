import React, { useState, useEffect, useRef } from "react";
import { Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      company: "Fuzzy Cloud",
      position: "Software Developer Intern",
      duration: "December 2023 - April 2024",
      description:
        "Collaborated with senior team members on a live client project, developing and integrating multiple applications using ReactJS, NextJS, SQLite, and other new libraries.",
    },
    {
      company: "Oasis Infobyte",
      position: "Web Designing and Development Intern",
      duration: "July 2023 - August 2023",
      description:
        "Designed and implemented an interactive web application, enhancing user engagement and functionality using ReactJS, NodeJS, ExpressJS and MongoDB.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-indigo-600 font-medium mb-2">My Experience</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Where I've Worked
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  transitionProperty: "all",
                }}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <div className="flex items-center">
                        <Briefcase size={18} className="text-indigo-600 mr-2" />
                        <h4 className="text-xl font-semibold text-gray-900">
                          {exp.position}
                        </h4>
                      </div>
                      <h5 className="text-indigo-600 font-medium mt-1">
                        {exp.company}
                      </h5>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-gray-600">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
