import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutDetail() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="pt-32 pb-10 px-6 max-w-6xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-label mb-3">Who I am</p>

        <motion.div
          whileHover={{ y: -5, boxShadow: "0 24px 60px rgba(59,130,246,0.12)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="card card-glow p-8 md:p-10 relative overflow-hidden"
        >
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
          />

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-16 bg-gradient-to-r from-blue-500 to-transparent origin-left mb-6"
          />

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed tracking-wide relative z-10">
            I believe technology holds the key to solving some of the world's
            most complex challenges and rising problems. By leveraging our
            skills in coding, problem-solving, and innovation, we should aim
            to create solutions that not only drive growth but also make a{" "}
            <span className="text-blue-400 font-medium">positive impact on society</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
