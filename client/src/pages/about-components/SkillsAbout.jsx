import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const languages = [
  { label: "C++", icon: SiCplusplus, color: "text-blue-400" },
  { label: "Java", icon: FaJava, color: "text-orange-400" },
  { label: "Python", icon: SiPython, color: "text-yellow-400" },
  { label: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
];

const frameworks = [
  { label: "React.js", icon: SiReact, color: "text-cyan-400" },
  { label: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { label: "Express.js", icon: SiNodedotjs, color: "text-gray-300" },
  { label: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { label: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
];

const tools = [
  { label: "Git & GitHub", icon: SiGit, color: "text-orange-500" },
  { label: "DSA", icon: SiCplusplus, color: "text-blue-400" },
  { label: "REST APIs", icon: SiNodedotjs, color: "text-green-400" },
  { label: "System Design", icon: SiReact, color: "text-cyan-400" },
];

function SkillCategory({ title, items, inView }) {
  return (
    <div className="mb-14">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 mb-8"
      >
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-zinc-700 to-transparent" />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5"
      >
        {items.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -6,
                scale: 1.06,
                boxShadow: "0 16px 32px rgba(0,0,0,0.5)",
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.96 }}
              className="card card-glow p-5 flex flex-col items-center justify-center gap-3 cursor-default group"
            >
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                className={`text-3xl ${skill.color} transition-transform duration-300`}
              >
                <Icon />
              </motion.div>
              <p className="text-xs font-semibold text-center text-gray-300 group-hover:text-white transition-colors">
                {skill.label}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function SkillsAbout() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full px-6 py-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-14"
      >
        <p className="section-label justify-center flex">My toolkit</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-px w-16 bg-gradient-to-r from-blue-500/50 via-blue-500 to-blue-500/50 mx-auto origin-center"
        />
      </motion.div>

      <SkillCategory title="Programming Languages" items={languages} inView={inView} />
      <SkillCategory title="Libraries & Frameworks" items={frameworks} inView={inView} />
      <SkillCategory title="Developer Tools & CS" items={tools} inView={inView} />
    </section>
  );
}
