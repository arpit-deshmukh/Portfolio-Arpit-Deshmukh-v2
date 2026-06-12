import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Education", to: "/education" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Activities", to: "/activities" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg shadow-black/20"
          : "backdrop-blur-md bg-black/20 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/">
          <motion.span
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="text-xl font-bold text-white tracking-wide block"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Arpit Deshmukh
            </span>
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.name}
                to={link.to}
                className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-blue-500/15 border border-blue-500/25"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-px bg-white block origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-px bg-white block"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-px bg-white block origin-center"
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-black/70 backdrop-blur-xl border-t border-white/5"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col px-6 py-4 gap-1"
            >
              {links.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                    }}
                  >
                    <Link
                      to={link.to}
                      className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
