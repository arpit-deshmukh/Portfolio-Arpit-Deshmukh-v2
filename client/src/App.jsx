import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Education from "./pages/Education.jsx";

import Portfolio from "./pages/Portfolio.jsx";
import Activities from "./pages/Activities.jsx";
import Projects from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ResumePage from "./components/ui/ResumePage.jsx";
import Quotes from "./pages/Quotes.jsx";

import Acheivements from "./pages/v2/Acheivements.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/resume" element={<ResumePage />} />
          <Route path="/quotes" element={<Quotes />} />

          {/* <Route path="/acheivements" element={<Acheivements />} /> */}


        </Routes>
      </div>
       <Footer />
    </BrowserRouter>
  );
}
