import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Activities() {
  const activities = [
    {
      title: "ITESA — IT Engineering Students Association",
      description:
        "Actively contributed to departmental events, peer-learning circles, and student-led initiatives. Participated in and conducted workshops focused on technology, collaboration, and problem-solving.",
      image: "/activities/arpit_1.png",
      tag: "Student Association",
    },
    {
      title: "Tarkashastra — Debate & Communication Club",
      description:
        "Participated in debates, group discussions, MUNs, and public-speaking sessions. Developed articulation, negotiation, and diplomatic skills through consistent practice.",
      image: "/activities/t2.png",
      tag: "Club",
    },
  ];

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
        <p className="section-label">What I do beyond code</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Activities &{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent origin-left"
        />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="space-y-10"
      >
        {activities.map((item, idx) => (
          <ActivityCard key={idx} item={item} idx={idx} />
        ))}
      </motion.div>
    </section>
  );
}

function ActivityCard({ item, idx }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="card card-glow overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0"
    >
      <motion.div
        className={`relative overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 md:h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium backdrop-blur-sm">
          {item.tag}
        </span>
      </motion.div>

      <div className={`p-8 flex flex-col justify-center gap-3 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-px w-10 bg-blue-500 origin-left mb-1"
        />
        <h2 className="text-2xl font-bold leading-snug">{item.title}</h2>
        <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
}
