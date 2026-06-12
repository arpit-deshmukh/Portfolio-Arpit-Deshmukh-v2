import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ── Animation Variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Sub-components ────────────────────────────────────────────────────────────

function InfoCard({ icon: Icon, label, value, href, delay = 0 }) {
  const content = (
    <motion.div
      variants={cardVariants}
      whileHover={{ x: 6, scale: 1.01 }}
      className="card card-hover-soft flex items-center gap-4 p-5 group cursor-pointer"
    >
      <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
        <Icon className="text-blue-400" fontSize="small" />
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mb-0.5">{label}</p>
        <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors">{value}</p>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

function FloatingLabel({ label, id, children }) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-xs text-gray-500 font-medium uppercase tracking-widest mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function InputField({ id, label, type = "text", value, onChange, placeholder, error, ...props }) {
  return (
    <FloatingLabel label={label} id={id}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-all duration-300
          focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/60
          hover:border-zinc-600
          ${error ? "border-red-500/60 focus:ring-red-500/30" : "border-zinc-700"}`}
        {...props}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-1.5 text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </FloatingLabel>
  );
}

function TextAreaField({ id, label, value, onChange, placeholder, error, rows = 5 }) {
  return (
    <FloatingLabel label={label} id={id}>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-all duration-300 resize-none
          focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/60
          hover:border-zinc-600
          ${error ? "border-red-500/60 focus:ring-red-500/30" : "border-zinc-700"}`}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-1.5 text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </FloatingLabel>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverMsg, setServerMsg] = useState("");

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (!form.subject.trim()) errs.subject = "Subject is required.";
    if (!form.message.trim()) errs.message = "Message is required.";
    else if (form.message.length < 10) errs.message = "Message must be at least 10 characters.";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("loading");
    setServerMsg("");

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setServerMsg(data.message);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setServerMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Could not reach the server. Please try again later.");
    }
  }

  return (
    <section
      ref={sectionRef}
      className="pt-28 pb-24 px-6 max-w-6xl mx-auto text-white"
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          Let's connect
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="text-gray-400 text-base max-w-xl leading-relaxed">
          I'm always open to new opportunities, collaborations, or just a good
          conversation about tech. Feel free to reach out.
        </p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-px w-24 bg-gradient-to-r from-blue-500 to-transparent origin-left"
        />
      </motion.div>

      {/* ── Body Grid ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid md:grid-cols-5 gap-10"
      >
        {/* ── Left: Info cards ── */}
        <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-4">
          <InfoCard
            icon={EmailIcon}
            label="Email"
            value="arpitdeshmukh21@gmail.com"
            href="mailto:arpitdeshmukh21@gmail.com"
          />
          <InfoCard
            icon={LinkedInIcon}
            label="LinkedIn"
            value="arpit-deshmukh-08877227a"
            href="https://www.linkedin.com/in/arpit-deshmukh-08877227a/"
          />
          <InfoCard
            icon={GitHubIcon}
            label="GitHub"
            value="@arpit-deshmukh"
            href="https://github.com/arpit-deshmukh"
          />
          <InfoCard
            icon={LocationOnIcon}
            label="Location"
            value="Pune, Maharashtra, India"
          />

          {/* Ambient glow block */}
          <motion.div
            variants={cardVariants}
            className="relative mt-2 p-5 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-500/15 overflow-hidden"
          >
            {/* animated shimmer */}
            <motion.div
              animate={{ x: ["0%", "200%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute top-0 left-[-60%] w-1/2 h-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent pointer-events-none"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Currently open to{" "}
              <span className="text-blue-400 font-medium">full-time roles</span> and{" "}
              <span className="text-blue-400 font-medium">freelance projects</span>.
              Response time is typically within 24 hours.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Right: Contact Form ── */}
        <motion.div variants={itemVariants} className="md:col-span-3">
          <div className="card p-7 relative overflow-hidden">
            {/* background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === "success" ? (
                // ── Success State ──
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-5"
                  >
                    <CheckCircleOutlineIcon className="text-green-400" style={{ fontSize: 38 }} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-sm">{serverMsg}</p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-6 py-2.5 rounded-xl border border-zinc-700 text-gray-400 text-sm hover:text-white hover:border-zinc-500 transition-all duration-300"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                // ── Form State ──
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 relative z-10"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      id="contact-name"
                      label="Name"
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Arpit Deshmukh"
                      error={errors.name}
                      autoComplete="name"
                    />
                    <InputField
                      id="contact-email"
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="you@example.com"
                      error={errors.email}
                      autoComplete="email"
                    />
                  </div>

                  <InputField
                    id="contact-subject"
                    label="Subject"
                    value={form.subject}
                    onChange={handleChange("subject")}
                    placeholder="Project collaboration, opportunity..."
                    error={errors.subject}
                  />

                  <TextAreaField
                    id="contact-message"
                    label="Message"
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder="Tell me about your project or just say hi..."
                    error={errors.message}
                    rows={5}
                  />

                  {/* Character count */}
                  <p className={`text-xs text-right -mt-3 transition-colors duration-300 ${form.message.length > 1800 ? "text-red-400" : "text-gray-600"}`}>
                    {form.message.length}/2000
                  </p>

                  {/* Server error banner */}
                  <AnimatePresence>
                    {status === "error" && serverMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                      >
                        <ErrorOutlineIcon fontSize="small" />
                        {serverMsg}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status !== "loading" ? { scale: 1.02, y: -1 } : {}}
                    whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                    className="relative flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-sm
                      bg-blue-600 hover:bg-blue-500 text-white
                      disabled:opacity-60 disabled:cursor-not-allowed
                      transition-all duration-300
                      shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
                  >
                    {/* shimmer on hover */}
                    <span className="absolute inset-0 rounded-xl overflow-hidden">
                      <motion.span
                        animate={{ x: ["0%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute top-0 left-[-60%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                      />
                    </span>

                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendIcon fontSize="small" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
