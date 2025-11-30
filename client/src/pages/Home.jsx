
import About from "./About";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Activities from "./Activities";
import Projects from "./Project";
import Contact from "./Contact";
import Hero from "../components/Hero";

import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";

export default function Home() {
    return (
        <>
      
        <Hero2/>
        <Hero3/>
         <About/>
                <Education/>
                <Portfolio/>
                <Activities/>
                <Projects/>
                <Contact/></>
    )
}