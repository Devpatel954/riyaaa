import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "Sweet Home Finder",
      description:
        "Developed a web application to streamline pet adoption with features like a personalized quiz, real-time chat, and adoption tracking, enhancing user experience and shelter operations.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "PostgreSQL",
        "Sequelize",
        "Socket.IO",
        "Multer",
        "Chakra UI",
      ],
      date: "November 2024",
      github: "#",
      live: "#",
    },
    {
      title: "Hand Me Down",
      description:
        "Developed a community-driven platform to streamline the exchange of academic resources, furniture, and materials, featuring dynamic user-generated posts, real-time search, and secure authentication.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
      date: "May 2023",
      github: "#",
      live: "#",
    },
    {
      title: "Mind Matter—Mental Health Care System",
      description:
        "Engineered a fully functional web application aimed at enhancing users' mental well-being by integrating features for appointment scheduling, educational resources on mental health topics, and secure daily journaling capabilities.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      date: "March 2023",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-indigo-600 font-medium mb-2">
              Featured Projects
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              What I've Built
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  transitionProperty: "all",
                }}
              >
                <div className="relative p-6">
                  <div className="absolute top-6 left-6 flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full font-semibold text-sm">
                    {index + 1}
                  </div>

                  <div className="pl-10">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 pr-2">
                        {project.title}
                      </h4>
                      <div className="flex space-x-3">
                        <a
                          href={project.live}
                          className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                          aria-label="View Project"
                        >
                          <ExternalLink size={18} />
                        </a>
                        <a
                          href={project.github}
                          className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{project.date}</span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md text-xs font-medium cursor-pointer hover:bg-indigo-100 transition-colors duration-300">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
