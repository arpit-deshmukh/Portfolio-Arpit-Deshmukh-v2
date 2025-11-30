import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Education", to: "/education" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Activities", to: "/activities" },
    // { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* logo */}
        <Link to="/" className="text-xl font-semibold text-white tracking-wide">
         <span className="text-blue-400"> Arpit Deshmukh
          {/* <div className="w-8 h-8 border-2 border-black-400 b">
             <img src="./core/logo/logo_2.png" alt="" />
          </div> */}
         </span>
        </Link>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-300 hover:text-white
              px-4 py-2 rounded-full transition-all duration-300
              hover:bg-white/10 hover:shadow-lg shadow-blue-500/30"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* mobile menu setup */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* mobile menu list */}
      {open && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 gap-3 bg-black/60 backdrop-blur-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white w-full
              px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
