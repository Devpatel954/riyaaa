import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

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

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" />,
      label: "Email",
      value: "mriya842@gmail.com",
      link: "mailto:mriya842@gmail.com",
    },
    {
      icon: <Mail className="text-blue-500" />,
      label: "Academic Email",
      value: "rmeht43@uic.edu",
      link: "mailto:rmeht43@uic.edu",
    },
    {
      icon: <Phone className="text-blue-500" />,
      label: "Phone",
      value: "(312)-358-8464",
      link: "tel:+13123588464",
    },
    {
      icon: <MapPin className="text-blue-500" />,
      label: "Location",
      value: "Chicago, IL",
      link: null,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitMessage({
        type: "success",
        text: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitMessage({ type: "", text: "" });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-blue-500 font-semibold text-center mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl font-bold text-center mb-12">Contact Me</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold mb-4">Let's Talk</h4>
              <p className="text-gray-600 mb-6">
                Whether you have a question, a project idea, or just want to say
                hi, feel free to reach out to me. I'm always open to discussing
                new projects, creative ideas, or opportunities to be part of
                your vision.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        {item.label}
                      </h5>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-blue-600 hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitMessage.text && (
                  <div
                    className={`p-4 rounded ${submitMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span className="mr-2">Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
