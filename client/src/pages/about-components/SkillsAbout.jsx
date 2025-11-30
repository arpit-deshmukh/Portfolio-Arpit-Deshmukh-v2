import { motion } from "framer-motion";
import {
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function SkillsAbout() {
 
    // category 1: programming languages
  const languages = [
    { label: "C++", icon: SiCplusplus },
    { label: "Java", icon: FaJava },
    { label: "Python", icon: SiPython },
    { label: "JavaScript", icon: SiJavascript },
  ];
// category 2: frameworks
  const frameworks = [
    { label: "React.js", icon: SiReact },
    { label: "Node.js", icon: SiNodedotjs },
    { label: "Express.js", icon: SiNodedotjs }, // Express has no icon
    { label: "MongoDB", icon: SiMongodb },
    { label: "TailwindCSS", icon: SiTailwindcss },
  ];


//   category 3 : tools & cs fundamentals
  const tools = [
    { label: "Git & GitHub", icon: SiGit },
    { label: "DSA (Data Structures & Algorithms)", icon: SiCplusplus },
    { label: "REST APIs", icon: SiNodedotjs },
    { label: "System Design (Basics)", icon: SiReact },
  ];

  const renderCategory = (title, items) => (
    <div className="mb-14">
      <motion.h3
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-semibold mb-6 text-center"
      >
        {title}
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {items.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="flex flex-col items-center justify-center p-6 
                         rounded-xl bg-white/5 backdrop-blur-md 
                         border border-white/10 shadow-md
                         hover:scale-105 hover:bg-white/10 
                         transition-all duration-300"
            >
              <Icon className="text-4xl mb-3 opacity-90" />
              <p className="text-sm font-medium text-center opacity-90">
                {skill.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="w-full px-6 py-16 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
      >
        Technical Skills
      </motion.h2>

      {renderCategory("Programming Languages", languages)}
      {renderCategory("Libraries & Frameworks", frameworks)}
      {renderCategory("Developer Tools & CS Fundamentals", tools)}
    </section>
  );
}
