import React, { useState, useEffect, useRef } from "react";

const About = () => {
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

  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Java", "C++", "Python", "TypeScript"],
    },
    {
      category: "Frameworks",
      items: [
        "ReactJS",
        "NextJS",
        "NodeJS",
        "ExpressJS",
        "Bootstrap",
        "Tailwind CSS",
        "Chakra UI",
      ],
    },
    { category: "Databases", items: ["MongoDB", "PostgreSQL"] },
    {
      category: "Tools & Technologies",
      items: [
        "Git",
        "GitHub",
        "Data Visualization",
        "Linux",
        "Microsoft Excel",
        "Adobe Photoshop",
        "Canva",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-indigo-600 font-medium mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Education & Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                My Education
              </h4>

              <div className="space-y-6">
                <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900">
                        University of Illinois Chicago
                      </h5>
                      <p className="text-gray-600">
                        Master of Science in Computer Science
                      </p>
                    </div>
                    <span className="text-sm text-indigo-600 font-medium mt-1 md:mt-0">
                      Expected May 2026
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">GPA: 4/4</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900">
                        Dharmsinh Desai University
                      </h5>
                      <p className="text-gray-600">
                        Bachelor of Technology in Information Technology
                      </p>
                    </div>
                    <span className="text-sm text-indigo-600 font-medium mt-1 md:mt-0">
                      Aug 2020 - May 2024
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">CGPA: 8.7/10.0</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                My Skills
              </h4>

              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">
                      {skillGroup.category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
