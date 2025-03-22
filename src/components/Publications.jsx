import React, { useState, useEffect, useRef } from "react";
import { FileText, Calendar, ExternalLink } from "lucide-react";

const Publications = () => {
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

  return (
    <section id="publications" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-indigo-600 font-medium mb-2">Research</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Academic Publications
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Speech Based Recognition of Gujarati Numerals using
                      Supervised Learning
                    </h4>
                    <div className="flex items-center text-gray-600 mb-2">
                      <FileText size={16} className="mr-2" />
                      <span className="text-sm">
                        International Journal of Engineering Research &
                        Technology
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-indigo-600 mt-2 md:mt-0 ml-0 md:ml-4">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm font-medium">December 2023</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Developed an audio classification model using MFCC features,
                  achieving 88.40% accuracy with Random Forest and 87% with SVM,
                  significantly advancing automated Gujarati numeral
                  recognition.
                </p>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-300 group"
                  >
                    <span>View Publication</span>
                    <ExternalLink
                      size={16}
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
