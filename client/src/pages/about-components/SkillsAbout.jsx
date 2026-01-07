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
  const languages = [
    { label: "C++", icon: SiCplusplus },
    { label: "Java", icon: FaJava },
    { label: "Python", icon: SiPython },
    { label: "JavaScript", icon: SiJavascript },
  ];

  const frameworks = [
    { label: "React.js", icon: SiReact },
    { label: "Node.js", icon: SiNodedotjs },
    { label: "Express.js", icon: SiNodedotjs },
    { label: "MongoDB", icon: SiMongodb },
    { label: "TailwindCSS", icon: SiTailwindcss },
  ];

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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="
                card
                card-glow
                p-6
                flex
                flex-col
                items-center
                justify-center
                rounded-xl
              "
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
