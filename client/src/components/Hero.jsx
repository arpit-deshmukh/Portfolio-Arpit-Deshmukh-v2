import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 text-white max-w-4xl mx-auto px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold leading-tight"
      >
        Hi, I'm <span className="text-blue-400">Arpit</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-300 mt-4 text-lg md:text-xl"
      >
        Developer • Researcher • Systems Thinker.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-400 mt-4 max-w-2xl"
      >
       Building real-world projects, exploring system design fundamentals, and learning deeply across computer science and software development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex gap-4 mt-8"
      >
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600/80 hover:bg-blue-600 transition rounded-lg font-medium"
        >
          View Projects
        </a>

        <a
          href="/about"
          className="px-6 py-3 border border-gray-600 hover:border-white transition rounded-lg font-medium"
        >
          About Me
        </a>
      </motion.div>

    </section>
  );
}


