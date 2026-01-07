import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import Quotes from "../pages/Quotes";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 text-gray-400 border-t border-white/10">

      <div className="flex items-center justify-center gap-6 mb-4">

        <a
          href=""
          className="hover:text-blue-400 transition"
          target="_blank"
        >
          <EmailIcon fontSize="medium" />
        </a>

        <a
          href="https://www.linkedin.com/in/arpit-deshmukh-08877227a/"
          className="hover:text-blue-400 transition"
          target="_blank"
        >
          <LinkedInIcon fontSize="medium" />
        </a>

        <a
          href="https://github.com/arpit-deshmukh"
          className="hover:text-blue-400 transition"
          target="_blank"
        >
          <GitHubIcon fontSize="medium" />
        </a>
      </div>
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Arpit. All rights reserved.
      </p>
    </footer>
  );
}
