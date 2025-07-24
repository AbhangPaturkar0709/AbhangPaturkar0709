"use client";

import {
  ExternalLink,
  Github,
  Globe,
  Feather,
  Server,
  TerminalSquare,
  Database,
  Layout,
  Boxes,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
import { SiBootstrap, SiCss3, SiDjango, SiHtml5, SiMongodb, SiMysql, SiPhp, SiReact, SiSpringboot, SiTailwindcss } from "react-icons/si";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => (isDown.current = false);
  const handleMouseLeave = () => (isDown.current = false);

  const projects = [
    {
      title: "Short Link - URL Shortener",
      stack: ["React", "Spring Boot", "MongoDB"],
      description:
        "A secure and customizable URL shortener supporting aliasing, link expiry, QR generation, and analytics.",
      features: [
        "Custom aliases and expiration for short links",
        "Detailed click analytics and QR code generation",
        "JWT-based user authentication and authorization",
        "CORS and Spring Security configuration for secure access",
      ],
      liveDemo: "https://shortlink-xdxw.onrender.com/",
      github:
        "https://github.com/AbhangPaturkar2023BIT508/UrlShortener-frontend",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Job Portal Web App",
      stack: ["React", "Tailwind", "Spring Boot", "MongoDB"],
      description:
        "A full-stack job portal with role-based features for job seekers, recruiters, and admins.",
      features: [
        "User registration and authentication (Admin, Recruiter, Job Seeker)",
        "Job listings, applications, and recruiter dashboards",
        "TailwindCSS and Mantine UI for responsive design",
        "REST APIs with Spring Boot and MongoDB for data persistence",
      ],
      liveDemo: "https://jobportal-frontend-dhw0.onrender.com/",
      github: "https://github.com/AbhangPaturkar2023BIT508/JobPortal-Frontend",
      color: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "Hostel Leave Management System",
      stack: ["Django", "HTML", "CSS"],
      description:
        "Web app for managing hostel leave requests, focusing on user roles and backend workflows.",
      features: [
        "Custom user model with role-based access (Student & Rector)",
        "User authentication and session-based login",
        "Leave request submission and rector approval system",
        "Form-template-view integration using Django MVC",
        "Database operations via Django ORM",
      ],
      liveDemo: "http://tiny.cc/hostel-leave-django",
      github: "https://github.com/AbhangPaturkar2023BIT508/hostel_leave",
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Brand Page React App",
      stack: ["React", "Hooks", "CSS"],
      description:
        "A responsive brand showcase web page created as a beginner project to learn React fundamentals and component structure.",
      features: [
        "Built using functional components and React Hooks",
        "JSX used for clean and readable UI structure",
        "React Router implemented for navigation",
        "Props to pass data between components",
        "Event handling using onClick and form submission",
        "Styled with plain CSS for responsiveness",
      ],
      liveDemo: "https://brandpage-react-c8fc4.web.app/",
      github: "https://github.com/AbhangPaturkar0709/BrandPage-react",
      color: "from-pink-500/20 to-yellow-500/20",
    },
    {
      title: "Magazine Management System",
      stack: ["PHP", "MySQL", "Bootstrap"],
      description:
        "A content submission and management system for college with approval workflows.",
      features: [
        "Role-based access for coordinators, students, and faculty",
        "Article submission, review, and approval tracking",
        "Responsive interface using Bootstrap 5",
        "Efficient MySQL database schema for article and user records",
      ],
      liveDemo: "https://gpamravatidigimagazine.000webhostapp.com/",
      github:
        "https://github.com/AbhangPaturkar0709/Magazine_management_system",
      color: "from-orange-500/20 to-red-500/20",
    },
  ];

  const techIcons = {
    React: <SiReact size={16} />,
    "Spring Boot": <SiSpringboot size={16} />,
    MongoDB: <SiMongodb size={16} />,
    Tailwind: <SiTailwindcss size={16} />,
    PHP: <SiPhp size={16} />,
    MySQL: <SiMysql size={16} />,
    Bootstrap: <SiBootstrap size={16} />,
    Django: <SiDjango size={16} />,
    HTML: <SiHtml5 size={16} />,
    CSS: <SiCss3 size={16} />,
  };

  return (
    <section id="projects" className="relative py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className=" items-center mb-8">
          <h2 className="heading-compact-lg text-center fade-in">
            Featured Projects
          </h2>
          
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-80 fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-compact h-full">
                <div
                  className={`h-32 rounded-lg bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center`}
                >
                  <Globe size={32} className="text-primary" />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="heading-compact text-foreground mb-2 truncate">
                      {project.title}
                    </h3>
                    <p className="text-compact text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <Marquee pauseOnHover speed={30} gradient={false}>
                    <div className="flex gap-2">
                      {project.stack.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-1 px-2 py-1 bg-primary/10 text-primary rounded-md text-[12px] mr-2"
                        >
                          {techIcons[tech]}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </Marquee>

                  <div>
                    <h4 className="text-compact font-medium text-foreground mb-2">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-[12px]"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full mt-2" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 text-[12px] h-8"
                      onClick={() => window.open(project.liveDemo, "_blank")}
                    >
                      <ExternalLink size={12} className="mr-1" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-[12px] h-8"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github size={12} className="mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edge blur effect */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-muted/30 via-muted/20 to-transparent" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-muted/30 via-muted/20 to-transparent" />

        <div className="text-center text-compact text-muted-foreground mt-8 fade-in">
          Swipe or drag to explore more projects
        </div>

        {/* Mobile scroll buttons */}
        <div className="flex justify-center gap-4 mt-6 ">
          <Button variant="outline" onClick={() => scroll("left")}>
            ←
          </Button>
          <Button variant="outline" onClick={() => scroll("right")}>
            →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
