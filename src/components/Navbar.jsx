import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setScrolled(scrollPosition > 50);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Riya<span className="text-indigo-600">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-indigo-600 ${activeSection === link.href.substring(1) ? "text-indigo-600" : "text-gray-700"}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg"
          >
            Get In Touch
          </a>

          <button
            className="md:hidden flex items-center text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-colors ${activeSection === link.href.substring(1) ? "text-indigo-600" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-3 text-center text-white bg-indigo-600 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
