// import HeroAbout from "../components/Hero2";
import HeroAbout from "../pages/about-components/HeroAbout.jsx";

export default function About() {
  return (

    <>
    
      <HeroAbout/>
       <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">

       {/* <Hero2/> */}
       <hr/>

      {/* TITLE */}
      {/* <h1 className="text-4xl font-bold mb-10">About Me</h1> */}

      <div className="grid md:grid-cols-3 gap-8">

        {/* LEFT CARD — PROFILE + INTRO */}
       
         <div className="md:col-span-2 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4"></h2>

          <p className="text-gray-300 leading-relaxed">

          </p>

          <p className="text-gray-400 mt-4">
             Hello! I'm Arpit Deshmukh, a tech enthusiast with intrest in building software which really bring valuable 
             and impact in the world
ranging from software 
          </p>
        </div>

        <div className="md:col-span-2 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4"></h2>

          <p className="text-gray-300 leading-relaxed">

          </p>

          <p className="text-gray-400 mt-4">
            I believe technology holds the key for solving some of the world’s most complex challenges and rising problems. By leveraging our skills in coding, problem-solving, and innovation, we should aim to create solutions that not only drive innovation and growth but also make a positive impact on society.
            on.
          </p>
        </div>
        

       
      </div>

      {/* SKILLS AND STRENGTHS */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {/* SKILLS CARD */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>

          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "TailwindCSS",
              "JavaScript",
              "Git",
              "REST APIs",
              "System Design Basics",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

       
      </div>

    </section>
    
    </>
   
  );
}
