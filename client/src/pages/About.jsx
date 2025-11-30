// import HeroAbout from "../components/Hero2";
import HeroAbout from "../pages/about-components/HeroAbout.jsx";
import SkillsAbout from "../pages/about-components/SkillsAbout.jsx";
import GeneralAbout from "../pages/about-components/generalAbout.jsx";
import AboutDetail from "../pages/about-components/aboutDetail.jsx";
import PortfolioAbout from "../pages/about-components/PortFolioAbout.jsx";
import Contact from "../pages/Contact.jsx";
import Hero3 from "../components/Hero3";


export default function About() {
  return (

    <>
    
    <Hero3/>
      <AboutDetail/>
      <SkillsAbout/>
      {/* <GeneralAbout/> */}

      <PortfolioAbout/>
      <Contact/>
  


    
    </>
   
  );
}
