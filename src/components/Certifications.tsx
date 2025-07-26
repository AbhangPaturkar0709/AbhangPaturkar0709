import { Award, ExternalLink, Code, Trophy, Star, Code2, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { SiCodeproject, SiCoder, SiCodewars, SiGroupme, SiOpenproject, SiSteamworks } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      title: "API Fundamentals Student Expert",
      issuer: "Postman",
      icon: <img
    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" className="w-10 h-10"/>,
    link:"https://badgr.com/public/assertions/V3mH3bExSSyKJ91riz6JtA",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Problem Solving",
      issuer: "HackerRank", 
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="w-10 h-10" />,
      link:"https://www.hackerrank.com/certificates/iframe/d7b53bf876e7",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Java",
      issuer: "HackerRank",
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="w-10 h-10" />,
      link:"https://www.hackerrank.com/certificates/iframe/0d9a80549521",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "SQL",
      issuer: "HackerRank",
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="w-10 h-10" />,
      link:"https://www.hackerrank.com/certificates/2f5331bd7c08",
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Hackathon Participant (Institute Level)",
      issuer: "Hackfusion 2024",
      icon: <Code2 className="w-10 h-10"/>,
      link:"",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const achievements = [
    {
      platform: "LeetCode",
      achievement: "450+ Problems Solved",
      description: "Regular contest participation with strong algorithmic problem-solving skills",
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-6 h-6" />,
      color: "text-orange-500",
      link:"https://leetcode.com/u/ABHANG_P/"
    },
    {
      platform: "GeeksforGeeks", 
      achievement: "200+ Problems Solved",
      description: "Strong foundation in data structures and algorithms",
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GFG" className="w-6 h-6" />,
      color: "text-green-500",
      link:"https://www.geeksforgeeks.org/user/abhangpaturkar0709/"
    },
    {
      platform: "HackerRank",
      achievement: "5 Star Java",
      description: "Solid OOP skills with consistent problem-solving practice",
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="w-6 h-6" />,
      color: "text-blue-500",
      link:"https://www.hackerrank.com/profile/abhangpaturkar01"
    }
  ];

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
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-compact-lg text-center mb-12 fade-in">Certifications & Achievements</h2>
        
        <div className="space-y-12">
          {/* Certifications */}
          <div>
            <h3 className="heading-compact text-center mb-8 text-muted-foreground">Certifications</h3>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="card-compact hover-lift text-center fade-in cursor-pointer min-w-[240px]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                      <div className="text-primary">
                        {cert.icon}
                      </div>
                    </div>
                    <h4 className="text-compact font-medium text-foreground mb-1">{cert.title}</h4>
                    <p className="text-[12px] text-muted-foreground">{cert.issuer}</p>
                    <Button variant="ghost" size="sm" className="mt-2 text-[12px] h-7" onClick={() => window.open(cert.link, "_blank")}
                      disabled={cert.link==""}>
                      <ExternalLink size={10} className="mr-1" />
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Competitive Programming */}
          <div>
            <h3 className="heading-compact text-center mb-8 text-muted-foreground">Competitive Programming</h3>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 md:grid md:grid-cols-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="card-compact hover-lift fade-in min-w-[260px]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className='flex justify-between'>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={achievement.color}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="text-compact font-medium text-foreground">{achievement.platform}</h4>
                        <p className="text-[12px] text-primary font-medium">{achievement.achievement}</p>
                      </div>
                    </div>
                      <Button variant="ghost" size="sm" className="text-[12px] h-7"
                      onClick={() => window.open(achievement.link, "_blank")}>
                        <ExternalLink size={10} />
                      </Button>
                    </div>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
