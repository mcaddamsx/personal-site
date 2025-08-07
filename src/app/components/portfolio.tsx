"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  X,
} from "lucide-react";
import {
  FaMedium,
  FaAws,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaGit,
  FaDev,
  FaPython,
} from "react-icons/fa";
import {
  SiDart,
  SiDiscord,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaDocker, FaFlutter } from "react-icons/fa6";

const Portfolio = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const funnyQuotes = [
    "I don't fix printers",
    "I debug over coffee",
    "I turn pizza into code",
    "I speak fluent JavaScript",
    "I make computers cry",
    "I'm allergic to Internet Explorer",
    "I dream in binary",
    "I git commit to excellence",
  ];

  const workExperience = [
    {
      title: "Software Enginer",
      company: "Amalitech gGmbH",
      period: "2023 - present",
      role: "Full-Stack Developer",
    },
    {
      title: "Frontend Developer",
      company: "LoGig Tech LLC",
      period: "2022 - 2023",
      role: "Intern",
    },
  ];

  const skills = [
    { name: "Python", level: 75, icon: FaPython },
    {
      name: "JavaScript",
      level: 95,
      icon: SiJavascript,
      color: "text-yellow-500",
    },
    {
      name: "TypeScript",
      level: 80,
      icon: SiTypescript,
      color: "text-blue-600",
    },
    { name: "Node.js", level: 75, icon: FaNodeJs, color: "text-green-600" },

    { name: "Dart", level: 75, icon: SiDart },
    { name: "AWS", level: 75, icon: FaAws },
    { name: "React", level: 90, icon: FaReact },
    { name: "Next.js", level: 85, icon: SiNextdotjs },
    { name: "Angular", level: 70, icon: FaAngular },

    { name: "Flutter", level: 70, icon: FaFlutter },
    { name: "Docker", level: 70, icon: FaDocker },
    { name: "Express", level: 70, icon: SiExpress },
    { name: "Nest Js", level: 70, icon: SiNestjs },

    { name: "", level: 70, icon: FaGit },

    { name: "Tailwind CSS", level: 70, icon: SiTailwindcss },
    { name: "MongoDB", level: 70, icon: SiMongodb },
    { name: "PostgreSql", level: 70, icon: SiPostgresql },
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "AWS reStart Certification",
  ];
  const Languages = [
    "Akan (Native)",
    "English",
    "French",
    "Spanish",
    "American Sign Language",
  ];

  useEffect(() => {
    const currentText = funnyQuotes[currentQuote];
    let i = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (i < currentText.length) {
        setDisplayedText(currentText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        setTimeout(() => {
          setCurrentQuote((prev) => (prev + 1) % funnyQuotes.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentQuote]);

  // const SkillBar = ({ skill, level }) => (
  //   <div className="mb-3 group">
  //     <div className="flex justify-between mb-1">
  //       <span className="text-black font-black text-xs">{skill}</span>
  //       <span className="text-amber-800 text-xs">{level}%</span>
  //     </div>
  //     <div className="w-full bg-amber-200 bg-opacity-20 rounded-full h-1.5 overflow-hidden">
  //       <div
  //         className="h-full bg-gradient-to-r from-amber-600 to-black rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105"
  //         style={{ width: `${level}%` }}
  //       />
  //     </div>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-[#FFFBF2]  from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Subtle Dot Grid Pattern */}
      {/* <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #d97706 0.5px, transparent 0.5px)`,
          backgroundSize: '5px 5px',
          backgroundRepeat: 'repeat',
        }}
      /> */}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-6 max-w-7xl">

        {/* Header */}
        <header className="  flex flex-col justify-between items-center transform hover:scale-105 transition-transform duration-500">
          <h1 className="text-2xl md:text-xl font-normal text-[#00000082] mb-3 tracking-tight drop-shadow-sm">
            Hi 👋,<span> Richard McAdams </span> here,
          </h1>
          <div className="text-lg md:text- text-black font-normal h-8 ">
            <span className="mr-2">I am a developer, </span>
            <span className="text-amber-800 font-black relative">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </div>
        </header>
        {/* Two Column Layout */}
        <div className="grid p-10 grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Name to Connect */}
          <div className="space-y-6">
            {/* About Card */}
            <div className="mb-14">
              <h2 className="text-lg text-[#000000a1] font-semibold mb-3 flex items-center">
                Who am I?
              </h2>
            <p className="text-black leading-relaxed font-normal text-sm">
  {"Passionate full-stack developer with a love for clean code and creative solutions. I transform ideas into digital experiences, one commit at a time. When I'm not coding, you'll find me exploring new technologies or explaining why CSS is both amazing and terrible."}
</p>
            </div>

            {/* Social Links */}
            <div className="mb-14">
              <h2 className="text-lg font-semibold text-[#000000a1] mb-3 flex items-center">
                Connect
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: Github,
                    label: "GitHub",
                    href: "https://www.github.com/mcaddamsx",
                    hoverColor: "hover:text-black",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "#",
                    hoverColor: "hover:text-blue-600",
                  },
                  {
                    icon: X,
                    label: "Twitter",
                    href: "#",
                    hoverColor: "hover:text-black",
                  },
                  {
                    icon: FaMedium,
                    label: "Medium",
                    href: "#",
                    hoverColor: "hover:text-gray-800",
                  },
                  {
                    icon: FaDev,
                    label: "DevTo",
                    href: "#",
                    hoverColor: "hover:text-black",
                  },
                  {
                    icon: SiDiscord,
                    label: "Discord",
                    href: "#",
                    hoverColor: "hover:text-indigo-600",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    href: "mailto:alex@example.com",
                    hoverColor: "hover:text-red-500",
                  },
                ].map(({ icon: Icon, label, href, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    className={` ${hoverColor} flex items-center space-x-2 border border-[#8a8888a1] rounded-sm px-2 py-1 bg-transparent bg-opacity-40  hover:scale-105 transition-transform duration-300 group`}
                  >
                    <Icon
                      size={16}
                      className={`text-[#000000a1] transition-colors duration-300 `}
                    />
                    <span className={`text-[#000000a1] font-light text-xs `}>
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-14">
              <h2 className="text-lg font-semibold text-[#000000a1] mb-3 flex items-center">
                Skills
              </h2>
              <div className="flex flex-wrap gap-4">
                {skills.map(({ name, icon: Icon, color }, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 items-center justify-center text-center hover:scale-105 transition-transform duration-300 group"
                  >
                    <Icon
                      className={`text-[#000000a1] group-hover:${color} transition-colors duration-300`}
                    />
                    <span className="text-xs font-semibold text-[#000000a1]">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Certifications */}
            <div className="mb-14">
              <h2 className="text-lg font-semibold text-[#000000a1] mb-3 flex items-center">
                Certifications
              </h2>
              <div className="flex flex-wrap gap-3 mb-5">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className=" bg-opacity-30 py-1 px-2 w-auto bg-[#FBBF24] rounded-sm"
                  >
                    <p className="text-black font-normal text-xs flex gap-2">
                      {" "}
                      <FaAws className="text-xl" />
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>
             {/* Langugaes */}
            <div className="mb-14">
              <h2 className="text-lg font-semibold text-[#000000a1] mb-3 flex items-center">
                Langugages
              </h2>
              <div className="flex flex-wrap gap-3 mb-5">
                {Languages.map((lang, index) => (
                  <div key={index} className=" bg-opacity-30 w-auto ">
                    <p className="text-[#000000a1] font-normal text-xs flex gap-2">
                      {" "}
                      {lang}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience to Certifications */}
          <div className="space-y-6">
            {/* Experience */}
            <div className="p-5 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-black text-black mb-4 flex items-center">
                <Briefcase className="mr-2" /> Experience
              </h2>
              <div className="space-y-4">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className="border-l-3 border-amber-600 pl-3 hover:border-black transition-colors duration-300"
                  >
                    <h3 className="font-black text-black text-sm">
                      {job.title}
                    </h3>
                    <p className="text-black font-black text-xs">
                      {job.company}
                    </p>
                    <p className="text-amber-800 text-xs mb-1">{job.period}</p>
                    <p className="text-black text-xs">{job.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
          </div>
        </div>

        {/* Cool Footer */}
        <footer className="text-center">
          <div className="border-t border-[#000000a1] ">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4">
                  <p className="text-black font-black text-xs">
                    © 2025 McAdams R.D
                  </p>
                  <span className="text-amber-800 font-black text-xs">•</span>
                  <p className="text-black font-black text-xs">
                    All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
