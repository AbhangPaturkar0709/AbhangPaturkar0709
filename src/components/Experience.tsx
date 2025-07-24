
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "Jul 2025 – Present",
      role: "Software Engineering Intern - MERN Stack",
      company: "Idevify Solutions Pvt. Ltd.",
      location: "Remote",
      type: "current",
      description: "Worked on full-stack projects for a jewelry platform and an in-house MERN app. Contributed to UI improvements, API development, product catalog management, and database structuring to optimize performance and user experience.",
      highlights: [
        "Full-stack development for jewelry platform",
        "API development and optimization",
        "Product catalog management system",
        "Database performance optimization"
      ]
    },
    {
      period: "Jun 2022 – Jul 2022",
      role: "Industrial Trainee",
      company: "For Better Code",
      location: "Onsite",
      type: "completed",
      description: "Worked on REST API-based applications, collaborated using Git and GitHub, and contributed to drafting Product Requirement Documents (PRDs) during the development lifecycle.",
      highlights: [
        "REST API development",
        "Git collaboration workflows",
        "Product Requirement Documentation",
        "Development lifecycle participation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-compact-lg text-center mb-12 fade-in">Experience</h2>
        
        <div className="relative">
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-primary/30"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      exp.type === 'current' 
                        ? 'bg-primary text-white' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      <Briefcase size={14} />
                    </div>
                    {exp.type === 'current' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  <div className="card-compact flex-1 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="heading-compact text-foreground">{exp.role}</h3>
                      <div className="flex items-center space-x-1 text-compact text-muted-foreground">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <p className="text-compact text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center space-x-1 text-compact text-muted-foreground">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-compact text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-compact font-medium text-foreground">Key Contributions:</h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                            <span className="text-compact text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
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

export default Experience;
