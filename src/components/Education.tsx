
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      period: "2023 – Present",
      degree: "B.Tech in Information Technology",
      institution: "Shri Guru Gobind Singhji Institute of Engineering and Technology",
      location: "Nanded, Maharashtra",
      grade: "CGPA: 8.0/10",
      status: "current"
    },
    {
      period: "2020 – 2023",
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic",
      location: "Amravati, Maharashtra",
      grade: "91.89%",
      status: "completed"
    },
    {
      period: "2019 – 2020",
      degree: "SSC",
      institution: "Adarsh High School, Daryapur",
      location: "Amravati, Maharashtra",
      grade: "91.20%",
      status: "completed"
    }

  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-compact-lg text-center mb-12 fade-in">Education</h2>
        
        <div className="relative">
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-primary/30"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      edu.status === 'current' 
                        ? 'bg-primary text-white' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      <GraduationCap size={14} />
                    </div>
                    {edu.status === 'current' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  <div className="card-compact flex-1 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="heading-compact text-foreground">{edu.degree}</h3>
                      <div className="flex items-center space-x-1 text-compact text-muted-foreground">
                        <Calendar size={12} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-compact text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-compact text-muted-foreground mb-2">{edu.location}</p>
                    <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-[12px] rounded-md">
                      {edu.grade}
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

export default Education;
