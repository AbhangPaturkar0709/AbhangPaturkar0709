import { useState } from "react";
import {
  Code2,
  Database,
  Globe,
  Coffee,
  Cpu,
  Layers,
  Zap,
  Server,
  GitBranch,
  Wrench,
  Boxes,
  Cloud,
  Monitor,
  Brain,
  FileCode2,
  Terminal,
  Braces,
  Settings2,
  ClipboardCheck
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
  SiGit,
  SiTailwindcss,
  SiDocker,
  SiGithub,
  SiJavascript,
  SiPython,
  SiSpringboot,
  SiDjango,
  SiBootstrap,
  SiMantine,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiLinux,
  SiRender,
  SiPythonanywhere,
  SiNetlify
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      {
        name: "Java",
        icon: <Coffee className="w-6 h-6 text-orange-600" />,
        description: "Backend programming"
      },{
        name: "Python",
        icon: <SiPython className="w-6 h-6 text-green-500" />,
        description: "Data analysis & automation"
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-6 h-6 text-yellow-500" />,
        description: "Frontend & backend scripting"
      },
      
      {
        name: "SQL",
        icon: <Database className="w-6 h-6 text-indigo-500" />,
        description: "Database queries & design"
      },
      {
        name: "HTML/CSS",
        icon: <Globe className="w-6 h-6 text-pink-500" />,
        description: "Web markup & styling"
      }
    ]
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="w-6 h-6 text-green-600" />,
        description: "Java framework"
      },
      {
        name: "React.js",
        icon: <SiReact className="w-6 h-6 text-sky-400" />,
        description: "Frontend UI library"
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-6 h-6 text-green-700" />,
        description: "JavaScript runtime"
      },
      {
        name: "Django",
        icon: <SiDjango className="w-6 h-6 text-green-900" />,
        description: "Python web framework"
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="w-6 h-6 text-purple-700" />,
        description: "CSS framework"
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="w-6 h-6 text-sky-500" />,
        description: "Utility-first CSS"
      },
      {
        name: "Mantine",
        icon: <SiMantine className="w-6 h-6 text-sky-500" />,
        description: "Utility-first CSS"
      }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql className="w-6 h-6 text-blue-500" />,
        description: "Relational database"
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-6 h-6 text-sky-700" />,
        description: "Advanced SQL database"
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-6 h-6 text-green-600" />,
        description: "NoSQL document store"
      },
      {
        name: "Redis",
        icon: <SiRedis className="w-6 h-6 text-red-500" />,
        description: "In-memory caching"
      }
    ]
  },
  {
    title: "Tools & Cloud",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        icon: <SiGit className="w-6 h-6 text-orange-500" />,
        description: "Version control"
      },
      {
        name: "GitHub",
        icon: <SiGithub className="w-6 h-6 text-black" />,
        description: "Code hosting"
      },
      {
        name: "Postman",
        icon: <SiPostman className="w-6 h-6 text-orange-600" />,
        description: "API testing"
      },
      {
        name: "Docker",
        icon: <SiDocker className="w-6 h-6 text-blue-600" />,
        description: "Containerization"
      },
      {
        name: "Saltcorn",
        icon: <Settings2 className="w-6 h-6 text-yellow-600" />,
        description: "No-code app builder"
      },
      {
        name: "AWS S3",
        icon: <Cloud className="w-6 h-6 text-indigo-500" />,
        description: "Cloud storage"
      }
    ]
  },
  {
    title: "Platforms",
    icon: Monitor,
    skills: [
      {
        name: "Linux",
        icon: <SiLinux className="w-6 h-6 text-gray-700" />,
        description: "Operating system"
      },
      {
        name: "Render",
        icon: <SiRender className="w-6 h-6 text-blue-500" />,
        description: "App hosting"
      },{
        name: "Netlify",
        icon: <SiNetlify  className="w-6 h-6 text-green-700" />,
        description: "App hosting"
      },
      {
        name: "PythonAnywhere",
        icon: <SiPythonanywhere  className="w-6 h-6 text-green-700" />,
        description: "Python hosting"
      }
    ]
  },
  {
    title: "Concepts",
    icon: Brain,
    skills: [
      {
        name: "REST APIs",
        icon: <Globe className="w-6 h-6 text-rose-600" />,
        description: "Web services"
      },
      {
        name: "Full-Stack Dev",
        icon: <Code2 className="w-6 h-6 text-black" />,
        description: "Frontend + Backend"
      },
      {
        name: "DBMS",
        icon: <Database className="w-6 h-6 text-indigo-700" />,
        description: "Data management"
      },
      {
        name: "DSA",
        icon: <Brain className="w-6 h-6 text-purple-600" />,
        description: "Problem solving"
      },
      {
        name: "System Design",
        icon: <Layers className="w-6 h-6 text-blue-600" />,
        description: "Architecture principles"
      }
    ]
  }
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].title);

  const activeCategory = skillCategories.find((cat) => cat.title === activeTab);

  return (
    <section id="skills" className="py-16 px-4">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-sm text-muted-foreground">
            A snapshot of the technologies and tools I work with
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition ${
                activeTab === cat.title
                  ? "bg-primary text-white shadow"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
  {activeCategory?.skills.map((skill) => (
    <div
      key={skill.name}
      className="w-40 group relative flex flex-col items-center justify-center rounded-lg border p-4 text-center shadow-sm bg-card hover:shadow-md"
    >
      <div className="mb-2">{skill.icon}</div>
      <span className="text-sm font-medium">{skill.name}</span>

      {/* Tooltip */}
      <div className="absolute z-10 bottom-full left-1/2 mb-2 hidden w-40 -translate-x-1/2 rounded bg-popover px-2 py-1 text-xs text-muted-foreground shadow-md group-hover:block">
        {skill.description}
        <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-t-popover border-transparent" />
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Skills;
