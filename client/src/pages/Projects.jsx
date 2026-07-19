import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const projects = [
  // {
  //   title: "Niwaas – Rental Property Platform",
  //   description:
  //     "A rental property management platform using the MERN stack.",
  //   tech: ["MERN", "JWT", "TailwindCSS"],
  //   github:
  //     "https://github.com/arpit-deshmukh/NIwaas-v3-Rental-Propery-management-Platform",
  //   live: "https://niwaas-v3.vercel.app/",
  //   image: "/project-assets/Niwaas-s1.png",
  // },
  {
    title: "Smart CRM – Customer Relationship Management",
    description: "A full-stack Customer Relationship Management (CRM) platform designed to help businesses manage leads, contacts, deals, companies, and communications efficiently with built-in analytics dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Recharts"],
    github: "https://github.com/arpit-deshmukh/smart-crm-TEW",
    live: "https://smart-crm-tew.vercel.app/",
    image: "/project-assets/smart-crm.png",
  },
  {
    title: "EcoPulse – Economy Insights Platform",
    description:
      "An interactive platform visualizing GDP, inflation, trade data, and economic trends using charts and clean dashboards.",
    tech: ["JavaScript", "Tailwind", "Charts"],
    github: "#",
    live: "https://ecopulse-v1.netlify.app/",
    image: "/project-assets/eco.png",
  },
  {
    title: "Air Quality Intelligence Platform",
    description:
      "A real-time environmental monitoring platform tracking AQI, pollution metrics, and city-wide air quality statistics.",
    tech: ["React", "Node.js", "API Integration"],
    github:
      "https://github.com/arpit-deshmukh/air-quality-intelligence-platform-v2",
    live: "https://air-quality-intelligence-platform-v.vercel.app/",
    image: "/project-assets/AQI.png",
  },
  {
    title: "Multi-Agent AI System",
    description:
      "An intelligent multi-agent system where multiple AI agents collaborate to solve complex tasks, simulate decision-making, and automate workflows.",
    tech: ["Python", "LLMs", "LangChain", "Multi-Agent Architecture"],
    github:
      "https://github.com/arpit-deshmukh/AI-Multi-Agent-Development-System",
    live: "https://multi-agent-dev-team-s1.vercel.app/app",
    image: "/project-assets/multi-agent-s1.png",
  },
  {
    title: "Movie Intelligence Platform",
    description:
      "A smart movie discovery platform that provides recommendations, trending films, ratings, and detailed insights using external APIs.",
    tech: ["React", "Node.js", "API Integration", "TMDB API"],
    github:
      "https://github.com/arpit-deshmukh/Movie-Recommendation-Project?tab=readme-ov-file",
    live: "https://movie-recommendation-project-v1.vercel.app/",
    image: "/project-assets/movie.png",
  },
  {
    title: "Visuals – WebRTC Video Chat",
    description:
      "A real-time video chat app using WebRTC and Socket.io.",
    tech: ["React", "WebRTC", "CSS"],
    github: "https://github.com/arpit-deshmukh/Visuals_v1",
    live: "#",
    image: "/project-assets/visuals.png",
  },
];

export default function Projects() {
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
        <p className="section-label">What I've built</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Projects
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
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="group"
      style={{ perspective: "1000px" }}
      onHoverEnd={() => setFlipped(false)}
    >
      <div
        className="relative w-full"
        style={{ transformStyle: "preserve-3d", minHeight: "340px" }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ backfaceVisibility: "hidden", position: "absolute", inset: 0 }}
          className="card card-glow overflow-hidden cursor-pointer"
          onClick={() => setFlipped(true)}
        >
          <div className="overflow-hidden h-44 relative">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-2 right-3 text-xs text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tap for details →
            </div>
          </div>

          <div className="p-5">
            <h2 className="text-lg font-bold leading-snug">{project.title}</h2>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 text-xs bg-blue-500/15 text-blue-300 border border-blue-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ rotateY: flipped ? 0 : -180 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            inset: 0,
            transform: "rotateY(180deg)",
          }}
          className="card flex flex-col justify-between p-6 cursor-pointer"
          onClick={() => setFlipped(false)}
        >
          <div>
            <p className="text-xs text-blue-400 font-semibold uppercase tracking-widest mb-2">
              {project.title}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 text-xs bg-blue-500/15 text-blue-300 border border-blue-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-700 hover:border-zinc-500 text-gray-300 hover:text-white text-sm transition-all duration-300"
              >
                <GitHubIcon fontSize="small" /> GitHub
              </a>
            )}
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm transition-all duration-300"
              >
                <OpenInNewIcon fontSize="small" /> Live
              </a>
            )}
          </div>

          <p className="text-center text-xs text-gray-600 mt-3">Tap to flip back</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
