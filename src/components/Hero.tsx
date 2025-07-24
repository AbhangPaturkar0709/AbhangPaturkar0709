import { useState } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/abhang-paturkar-875107245/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      url: "https://github.com/abhangpaturkar2023BIT508",
      color: "hover:text-gray-600"
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      url: "mailto:abhangpaturkar0709@email.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <div className="space-y-3">
              <p className="text-compact text-muted-foreground">Hello, 👋</p>
              <h1 className="text-[32px] md:text-[40px] font-bold leading-[1.2] text-foreground">
                I'm Abhang Paturkar
              </h1>
              <p className="text-compact-lg text-muted-foreground font-medium">
                Software Engineering Student | Full-Stack Developer
              </p>
              <p className="text-compact text-muted-foreground max-w-md">
                I love to build apps and webapps. Turning ideas into reality is my passion!
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                onClick={scrollToProjects}
                variant="outline"
                className="group text-compact px-6 py-2 h-auto"
              >
                Explore My Work
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                className="px-6 py-2 h-auto"
                onClick={() => window.open(`${import.meta.env.BASE_URL}AbhangPaturkarResume.pdf`, '_blank')}
              >
                <Download size={14} className="mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-200 ${link.color} hover-lift`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Avatar Image */}
          {/* Avatar Image */}
<div className="hidden lg:flex justify-center lg:justify-end fade-in">
  <div className="relative group">
    <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-primary/30 hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
      <img
        src={`${import.meta.env.BASE_URL}avatar.jpg`}
        alt="Abhang Paturkar"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="eager"
      />
    </div>

    {/* Floating animation dots */}
    <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-ping" />
    <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "800ms" }} />
    <div className="absolute -top-5 left-8 w-4 h-4 bg-primary/70 rounded-full animate-bounce" style={{ animationDelay: "400ms" }} />
    <div className="absolute top-10 -left-5 w-3.5 h-3.5 bg-secondary/60 rounded-full animate-pulse" style={{ animationDelay: "1200ms" }} />
    <div className="absolute bottom-6 -right-5 w-5 h-5 bg-accent rounded-full animate-ping" style={{ animationDelay: "600ms" }} />
    <div className="absolute top-1/2 -translate-y-1/2 -right-6 w-4 h-4 bg-primary/80 rounded-full animate-bounce" style={{ animationDelay: "1000ms" }} />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
