import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const socials = [
  {
    href: "mailto:arpitdeshmukh21@gmail.com",
    icon: EmailIcon,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/arpit-deshmukh-08877227a/",
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/arpit-deshmukh",
    icon: GitHubIcon,
    label: "GitHub",
  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer ref={ref} className="mt-20 py-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          {socials.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors duration-300"
            >
              <Icon fontSize="small" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mx-auto mb-5"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-sm text-gray-500"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-400 font-medium">Arpit Deshmukh</span>. All
          rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
