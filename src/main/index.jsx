import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin,
  Code,
  Palette,
  Zap,
  Download,
  Phone,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "education", "experience"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "-50px",
    });

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement("a");
    link.href = "#"; // You would replace this with actual resume file path
    link.download = "Dhaval_Panchal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
  ];

  const projects = [
    {
      title: "React Admin Dashboard",
      description:
        "Elevate data management and visualization with React admin dashboard, crafted with Ant Design for polished UI components. Styled Components ensure customizable styling, while integrating Highcharts enriches functionality for dynamic insights.",
      tech: ["React", "Ant Design", "Styled Components", "Highcharts"],
      github: "https://github.com/dhaval1701",
      live: "#",
      period: "Mar 2024 - Apr 2024",
    },
    {
      title: "Chat Application",
      description:
        "Empower seamless communication with React-based web chat app, powered by Firebase for real-time updates. Tailwind CSS brings sleek styling, ensuring a visually appealing and intuitive user experience.",
      tech: ["React", "Firebase", "Tailwind CSS", "Real-time"],
      github: "https://github.com/dhaval1701",
      live: "#",
      period: "Nov 2023 - Dec 2023",
    },
    {
      title: "E-commerce Application",
      description:
        "A comprehensive e-commerce platform that facilitates online buying and selling of products, built using React library with modern UI components and responsive design.",
      tech: ["React", "JavaScript", "CSS", "API Integration"],
      github: "https://github.com/dhaval1701",
      live: "#",
      period: "Sep 2023 - Oct 2023",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering - Information Technology",
      school: "L.J. Institute of Engineering & Technology",
      year: "2019 - 2023",
      description:
        "Graduated with CGPA of 8.95, specializing in Information Technology with focus on software development and modern programming practices.",
    },
  ];

  const experience = [
    {
      title: "Jr. React Developer",
      company: "Cord4 Technologies",
      period: "Dec 2023 - Present",
      location: "Ahmedabad, India",
      description: [
        "Developing and maintaining software applications with focus on enhancing user experience",
        "Working with React ecosystem to build responsive and dynamic web applications",
        "Collaborating with cross-functional teams to deliver high-quality frontend solutions",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Samyak Infotech Pvt Ltd.",
      period: "Jan 2023 - Aug 2023",
      location: "Ahmedabad, India",
      description: [
        "Collaborated on various software development projects",
        "Gained hands-on experience in the complete software development lifecycle",
        "Worked with modern web technologies and development methodologies",
      ],
    },
    {
      title: "Summer Intern",
      company: "BrainyBeam Technologies Pvt. Ltd",
      period: "Jun 2022",
      location: "Remote",
      description: [
        "Gained hands-on experience in Python programming",
        "Utilized libraries such as Pandas, NumPy, and Matplotlib",
        "Successfully completed a sentiment analysis project using data science techniques",
      ],
    },
  ];

  const skills = {
    frontend: ["JavaScript", "React", "HTML", "CSS"],
    frameworks: ["Bootstrap", "Tailwind CSS", "Ant Design", "MUI"],
    backend: ["Node.js"],
    tools: ["Git", "VS Code", "npm/yarn"],
  };

  // Lottie Animation Component
  const LottieAnimation = ({ animationData, className }) => {
    const [animationRef, setAnimationRef] = useState(null);

    useEffect(() => {
      if (animationRef) {
        animationRef.style.animation = "float 3s ease-in-out infinite";
      }
    }, [animationRef]);

    return (
      <div
        ref={setAnimationRef}
        className={`${className} flex items-center justify-center`}
      >
        {animationData === "coding" && (
          <Code size={80} className="text-stone-800" />
        )}
        {animationData === "design" && (
          <Palette size={80} className="text-stone-800" />
        )}
        {animationData === "innovation" && (
          <Zap size={80} className="text-stone-800" />
        )}
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-stone-50 text-stone-900"
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      {/* Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap');
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-stone-900">DP</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`transition-all duration-300 font-medium relative ${
                    activeSection === link.id
                      ? "text-stone-900"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-stone-900"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Resume Download Button */}
            <button
              onClick={downloadResume}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-stone-900 text-stone-50 rounded-sm hover:bg-stone-800 transition-all duration-300 font-medium"
            >
              <Download size={16} />
              Resume
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-stone-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-50/95 backdrop-blur-md border-t border-stone-200">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 text-stone-700 hover:text-stone-900 transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 px-3 py-2 bg-stone-900 text-stone-50 rounded-sm hover:bg-stone-800 transition-all duration-300 font-medium w-full"
              >
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-8">
              <LottieAnimation
                animationData="coding"
                className="w-32 h-32 mx-auto mb-8"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-stone-900 tracking-tight">
              Dhaval Panchal
            </h1>
            <p className="text-2xl md:text-3xl text-stone-700 mb-6 font-light">
              Frontend Developer
            </p>
            <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Junior Frontend Developer with hands-on experience in React,
              building responsive and dynamic web applications with modern
              JavaScript frameworks
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-10 py-4 bg-stone-900 text-stone-50 rounded-sm hover:bg-stone-800 transition-all duration-300 font-semibold text-lg"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-10 py-4 border border-stone-300 text-stone-900 rounded-sm hover:bg-stone-100 transition-all duration-300 font-semibold text-lg"
              >
                About Me
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-stone-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.about
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black text-center mb-20 text-stone-900">
              About Me
            </h2>
            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center">
                <LottieAnimation
                  animationData="coding"
                  className="w-24 h-24 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-stone-900">
                  Development
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Passionate about creating responsive web applications using
                  React and modern JavaScript frameworks with focus on user
                  experience.
                </p>
              </div>
              <div className="text-center">
                <LottieAnimation
                  animationData="design"
                  className="w-24 h-24 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-stone-900">
                  UI/UX
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Experienced in creating visually appealing interfaces using
                  Ant Design, Material-UI, and Tailwind CSS for optimal user
                  experiences.
                </p>
              </div>
              <div className="text-center">
                <LottieAnimation
                  animationData="innovation"
                  className="w-24 h-24 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-stone-900">
                  Problem Solving
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Strong analytical abilities with excellent problem-solving
                  skills and time management capabilities to deliver quality
                  solutions.
                </p>
              </div>
            </div>
            <div className="mt-20 text-center max-w-4xl mx-auto">
              <p className="text-xl text-stone-700 leading-relaxed mb-8">
                Based in Ahmedabad, India, I'm a passionate Frontend Developer
                specializing in React ecosystem. With hands-on experience in
                building dynamic web applications, I focus on creating seamless
                user experiences through clean code and modern development
                practices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <h4 className="font-bold text-stone-900 mb-3">Frontend</h4>
                  <div className="space-y-1">
                    {skills.frontend.map((skill, index) => (
                      <p key={index} className="text-sm text-stone-600">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-stone-900 mb-3">Frameworks</h4>
                  <div className="space-y-1">
                    {skills.frameworks.map((skill, index) => (
                      <p key={index} className="text-sm text-stone-600">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-stone-900 mb-3">Backend</h4>
                  <div className="space-y-1">
                    {skills.backend.map((skill, index) => (
                      <p key={index} className="text-sm text-stone-600">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-stone-900 mb-3">Tools</h4>
                  <div className="space-y-1">
                    {skills.tools.map((skill, index) => (
                      <p key={index} className="text-sm text-stone-600">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <a
                  href="mailto:dhavalpanchal1701@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-stone-200 text-stone-900 rounded-sm hover:bg-stone-300 transition-all duration-300 font-medium"
                >
                  <Mail size={16} />
                  dhavalpanchal1701@gmail.com
                </a>
                <a
                  href="tel:+917436055117"
                  className="flex items-center gap-2 px-6 py-3 bg-stone-200 text-stone-900 rounded-sm hover:bg-stone-300 transition-all duration-300 font-medium"
                >
                  <Phone size={16} />
                  +91 7436055117
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.projects
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black text-center mb-20 text-stone-900">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-stone-100 border border-stone-200 rounded-sm p-8 hover:border-stone-300 transition-all duration-300 group hover:shadow-lg"
                >
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-stone-900 group-hover:text-stone-800 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-stone-500 font-medium">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-stone-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-stone-200 text-stone-700 rounded-sm text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors font-medium"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors font-medium"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.education
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black text-center mb-20 text-stone-900">
              Education
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-stone-50 border border-stone-200 rounded-sm p-8 hover:border-stone-300 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-stone-700 font-medium">
                        {edu.school}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 mt-2 md:mt-0">
                      <Calendar size={16} />
                      {edu.year}
                    </div>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.experience
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black text-center mb-20 text-stone-900">
              Experience
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-stone-100 border border-stone-200 rounded-sm p-8 hover:border-stone-300 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-stone-700 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-stone-500 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="text-stone-600 space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 leading-relaxed"
                      >
                        <span className="text-stone-900 mt-2 text-xs">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-stone-900 text-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-stone-300 mb-8 text-lg">
              Ready to bring your frontend vision to life? Let's discuss your
              next project.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="mailto:dhavalpanchal1701@gmail.com"
                className="text-stone-400 hover:text-stone-200 transition-colors"
              >
                <Mail size={28} />
              </a>
              <a
                href="https://github.com/dhaval1701"
                className="text-stone-400 hover:text-stone-200 transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/dhaval-panchal-a2a30a203"
                className="text-stone-400 hover:text-stone-200 transition-colors"
              >
                <Linkedin size={28} />
              </a>
            </div>
            <div className="border-t border-stone-700 pt-8 mt-8">
              <p className="text-stone-500 text-sm">
                © 2024 Dhaval Panchal. Crafted with React and passion in
                Ahmedabad, India.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
