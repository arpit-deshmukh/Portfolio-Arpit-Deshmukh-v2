import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ComputerIcon from "@mui/icons-material/Computer";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const portfolioItems = [
  {
    title: "Technical Projects",
    description:
      "A collection of full-stack, MERN, and real-world applications built with modern technologies.",
    link: "/projects",
    icon: ComputerIcon,
    accent: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  },
  {
    title: "Activities & Clubs",
    description:
      "Active participation and experiences in clubs, sessions, and student-led programs.",
    link: "/activities",
    icon: TrackChangesIcon,
    accent: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  },
  {
    title: "Research & Articles",
    description:
      "Research, reports, and thoughtful analysis on topics across computer science and software.",
    link: "#",
    icon: ArticleIcon,
    accent: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
];

export default function PortfolioAbout() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <p className="section-label">Explore my work</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Portfolio{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Overview
          </span>
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent origin-left"
        />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {portfolioItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={idx}
              href={item.link}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
              whileTap={{ scale: 0.97 }}
              className={`card block p-6 group relative overflow-hidden border ${item.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}>
                  <Icon fontSize="small" />
                </div>
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{item.description}</p>
                <div className="flex items-center gap-1.5 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Explore</span>
                  <ArrowForwardIcon fontSize="small" />
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}
