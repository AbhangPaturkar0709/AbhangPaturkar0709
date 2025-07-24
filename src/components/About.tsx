import { Code, Database, Globe, Layout, Server, Settings } from 'lucide-react';
import {
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiReact,
  SiPostman,
  SiMongodb,
  SiSpringboot,
  SiDatabricks,
  SiXdadevelopers
} from "react-icons/si";

const highlights = [
  { icon: <Code size={16} />, title: "Full-Stack Development" },  // General-purpose
  { icon: <SiHtml5 size={16} />, title: "Web Development" },              // Strong frontend symbol
  { icon: <SiSpringboot size={16} />, title: "Backend Development" },      // Node.js for backend
  { icon: <SiReact size={16} />, title: "Frontend Development" },         // React is ideal for frontend
  { icon: <SiPostman size={16} />, title: "API Development" },            // Postman is widely used for API
  { icon: <SiDatabricks size={16} />, title: "Database Management" }         // MongoDB is a solid DB symbol
];

const About = () => {
//   const highlights = [
//   { icon: <Code size={16} />, title: "Full-Stack Development" }, // Code suits both front and back
//   { icon: <Layout size={16} />, title: "Web Development" },       // Layout represents UI/web structure
//   { icon: <Server size={16} />, title: "Backend Development" },   // Server is ideal for backend
//   { icon: <Settings size={16} />, title: "Frontend Development" }, // Settings can imply tweaking UI
//   { icon: <Globe size={16} />, title: "API Development" },        // Globe indicates internet / APIs
//   { icon: <Database size={16} />, title: "Database Management" }, // Perfect as-is
// ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center text-foreground">About Me</h2>

        <div className="grid md:grid-rows-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Software Engineering Student</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Software Engineering student with hands-on experience in full-stack development using
              <span className="font-medium text-primary"> Spring Boot</span>,
              <span className="font-medium text-primary"> React</span>, and the
              <span className="font-medium text-primary"> MERN stack</span>. Skilled in building RESTful APIs,
              designing scalable systems, and solving complex data structure and algorithm problems.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Currently pursuing a B.Tech in Information Technology with a strong academic background and
              internship experience in real-world projects. Eager to contribute to impactful software
              solutions and grow as a developer through continuous learning and collaboration.
            </p>
          </div>

          {/* Right - Marquee Highlights */}
          <div className="overflow-hidden relative">
            <div className="flex space-x-4 animate-scroll">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full shadow-sm min-w-max text-sm font-medium"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              ))}
              {/* Duplicate for continuous scroll effect */}
              {highlights.map((item, index) => (
                <div
                  key={index + 3}
                  className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full shadow-sm min-w-max text-sm font-medium"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
