import { useState, useEffect } from "react";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { ProjectCard } from "./components/ProjectCard";
import { TimelineItem } from "./components/TimelineItem";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import React from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: "about", label: "About Me" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Work Experience" },
    { id: "projects", label: "Projects" },
  ];

  const projects = [
    {
      title: "Task Management Dashboard",
      description:
        "A comprehensive task management application with real-time collaboration features, drag-and-drop functionality, and advanced filtering options for teams.",
      tags: ["React", "Tailwind", "Firestore", "TypeScript"],
      imageUrl:
        "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGxhcHRvcCUyMGNvZGV8ZW58MXx8fHwxNzYzNjQyMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for tracking workouts, nutrition, and progress with personalized recommendations and social sharing capabilities.",
      tags: ["React Native", "Node.js", "MongoDB", "Express"],
      imageUrl:
        "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNTk5NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with secure payment integration, inventory management, and comprehensive admin dashboard for store owners.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      imageUrl:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzYzNTQyNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const educationData = [
    {
      title: "Master of Information Technology",
      subtitle: "University of Technology Sydney",
      period: "2022 - 2024",
      description: "Specialized in Cloud Technology and IT Project Management, focusing on integrating technology with business processes to drive innovation and efficiency.",
    },
    {
      title: "B.A (Eng)",
      subtitle: "Yadanarbon University (Distance Education)",
      period: "2013 - 2017",
      description: "Bachelor of Arts in English, emphasizing advanced communication, critical thinking, and analytical skills.",
    },
    {
      title: "BSc Hons (BIT)",
      subtitle: "University of Greenwich",
      period: "2013 - 2016",
      description: "Business Information Technology, with a focus on software development, data analysis, and IT solutions for business applications.",
    },
  ];

  const experienceData = [
    {
      title: "Software Developer",
      subtitle: "Belway Labour Management, Sydney, Australia",
      period: "2024 - Present",
      achievements: [
        "Developed a web-based Milk Carton Counting System, improving operational efficiency by 35% and reducing manual errors by 50%.",
        "Served as Technical Lead for the Container Tracking System and Job Tracking System, managing a team of 2 developers and overseeing 3 major projects simultaneously.",
        "Created Azure Blob Storage scripts to migrate 100,000+ files from traditional web servers to cloud-based storage, reducing storage costs by 40%.",
        "Maintained and tested custom Clock-in/Clock-out Kiosk System used by 200+ employees, improving reliability and uptime to 99.8%.",
        "Led migration of Windows local AD to Azure AD for 60+ users, enhancing security and centralized management.",
        "Developed and technically led Web API for iOS offline mode, supporting 800+ daily offline transactions seamlessly.",
        "Provided daily IT support for 90+ staff, ensuring uninterrupted operations and reducing incident response time by 30%.",
      ],
    },
    {
      title: "Software Engineer",
      subtitle: "Myanma Computer Company Ltd (MCC), Mandalay, Myanmar",
      period: "January 2018 - September 2019",
      achievements: [
        "Led a team of 7 developers on the Education Management Information System Phase 2 (EMIS), enhancing strategic decision-making and budgeting for Myanmar's education sector.",
        "Coordinated with 4 project teams to develop work plans, define specifications, and ensure deliverables met project standards.",
        "Designed and implemented scalable, maintainable code in C# (ASP.NET), JavaScript, and SQL, improving system performance and reducing maintenance costs.",
        "Conducted daily stand-ups, code reviews, and mentorship for junior team members, improving code quality and team productivity.",
        "Introduced version control best practices using TortoiseVCS, enhancing collaboration and version tracking.",
        "Compiled and submitted weekly technical reports to stakeholders, ensuring transparent communication and coordination.",
      ],
    },
    {
      title: "Junior Software Engineer",
      subtitle: "Myanma Computer Company Ltd (MCC), Mandalay, Myanmar",
      period: "January 2016 - December 2017",
      achievements: [
        "Collaborated on the development of EMIS Phase 1 using ASP.NET (C#) and front-end technologies (HTML, CSS, JavaScript).",
        "Designed and implemented database management systems with ERD planning and MySQL server setup.",
        "Generated PDF and Excel reports to support business needs, ensuring accuracy in both database and UI design.",
        "Developed 50+ web application forms and 30+ report forms, analyzing content strategies and UI layouts for optimal system design.",
      ],
    },
    {
      title: "Junior System Analyst (Intern)",
      subtitle: "Telenor Myanmar, Mandalay, Myanmar",
      period: "January 2015 - December 2015",
      achievements: [
        "Executed ERP software implementation for government sectors, adhering to schedule and budget.",
        "Analyzed 200+ customer records and 50+ agent data daily for accuracy, supporting business process improvements.",
        "Collaborated with cross-functional teams to restructure system management design, improving productivity and aligning with performance metrics.",
      ],
    },
  ];
  

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl hover:text-[#3b82f6] transition-colors"
            >
            MOE
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm hover:text-[#3b82f6] transition-colors ${
                    activeSection === link.id ? "text-[#3b82f6]" : "text-zinc-400"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-zinc-900">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left py-2 px-4 hover:bg-zinc-900 transition-colors ${
                    activeSection === link.id ? "text-[#3b82f6]" : "text-zinc-400"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-[#3b82f6]">
              <ImageWithFallback
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1_mdVnXEszn-8TxcxuOFnifmeoi1G8G_O8yZiKcfZG54dSMb5qB4UaTXuXNAD4pDjAY&usqp=CAU"
                alt="Professional Headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="mb-6 text-center">
              Full-Stack Developer & Design Enthusiast
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mb-8">
              Crafting elegant solutions to complex problems. Passionate about
              creating seamless user experiences and scalable applications.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-full hover:bg-[#3b82f6] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-full hover:bg-[#3b82f6] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-zinc-300">
              I'm a passionate full-stack developer with over six years of experience 
              building web and cloud applications that make a real impact. 
              My journey in tech started with a curiosity about how things work and 
              has grown into a career focused on creating innovative solutions.
              </p>
              <p className="text-zinc-300">
              I specialize in web and cloud technologies, with a strong emphasis on writing clean,
              maintainable code. Beyond coding, I enjoy exploring new frameworks, contributing
              to open-source projects, and sharing knowledge through technical writing.
              </p>
              <p className="text-zinc-300">
              I believe in continuous learning and staying up-to-date with industry trends. My goal
              is to build products that not only meet technical requirements but also deliver
              exceptional user experiences and tangible value to users.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://plus.unsplash.com/premium_photo-1685086785230-2233cf5d8f28?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Abstract Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-[#3b82f6] transition-all">
              <h3 className="mb-6 text-[#3b82f6]">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Vue.js", "HTML5", "CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-[#3b82f6] transition-all">
              <h3 className="mb-6 text-[#3b82f6]">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express", "Swift","PHP", "C#" ,"PostgreSQL", "MySQL", "MsSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Cloud */}
            <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-[#3b82f6] transition-all">
              <h3 className="mb-6 text-[#3b82f6]">Tools & Cloud</h3>
              <div className="flex flex-wrap gap-3">
                {["AWS", "Azure", "Git", "cPanel", "Docker", "CI/CD"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Education Background</h2>
          <div>
            {educationData.map((edu, index) => (
              <TimelineItem
                key={index}
                title={edu.title}
                subtitle={edu.subtitle}
                period={edu.period}
                description={edu.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Work Experience</h2>
          <div>
            {experienceData.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.title}
                subtitle={exp.subtitle}
                period={exp.period}
                achievements={exp.achievements}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Portfolio Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500">
              © 2025 Myat Aung Moe. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-zinc-500 hover:text-[#3b82f6] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-zinc-500 hover:text-[#3b82f6] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-[#3b82f6] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}