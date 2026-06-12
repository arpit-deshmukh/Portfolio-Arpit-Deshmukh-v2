import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering (Information Technology)",
      institute: "D. Y. Patil College of Engineering (DYPCOE), Akurdi, Pune",
      year: "2023 – 2027",
      description:
        "Pursuing Bachelor of Engineering in Information Technology, focusing on software development, system fundamentals, and building real-world projects using modern technologies.",
      score: "CGPA : 8.7",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institute: "Brijlal Biyani College of Science and Technology, Amravati",
      year: "2021 – 2023",
      description:
        "Studied core science subjects including Physics, Chemistry, and Mathematics, building strong analytical and problem-solving skills.",
      score: "Score : 81.83%",
      icon: "📚",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Manibai Gujarati High School, Amravati",
      year: "2020 – 2021",
      description:
        "Completed secondary education with strong academic performance and active participation in school-level activities.",
      score: "Score : 96.60%",
      icon: "🏫",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="pt-28 pb-20 px-6 max-w-5xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <p className="section-label">My academic journey</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Education
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
        className="relative"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent origin-top hidden md:block"
        />

        <div className="space-y-8">
          {educationData.map((item, idx) => (
            <EducationCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function EducationCard({ item }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="relative md:pl-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        className="absolute left-0 top-6 w-12 h-12 rounded-full bg-zinc-900 border-2 border-blue-500/60 flex items-center justify-center text-xl hidden md:flex shadow-lg shadow-blue-500/10"
      >
        {item.icon}
      </motion.div>

      <motion.div
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="card card-glow p-6 md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <h2 className="text-xl md:text-2xl font-bold leading-snug">{item.degree}</h2>
          <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-300 text-xs font-semibold whitespace-nowrap">
            {item.year}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-3">{item.institute}</p>
        <p className="text-gray-300 leading-relaxed text-sm mb-4">{item.description}</p>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold">
          <span>📊</span>
          {item.score}
        </div>
      </motion.div>
    </motion.div>
  );
}
