export default function Projects() {

  const projects = [
    {
      title: "Air Quality Intelligence Platform",
      description:
        "A real-time environmental monitoring platform that tracks AQI, pollution metrics, and city-wide air quality statistics using modern APIs and interactive dashboards.",
      tech: ["React", "Node.js", "API Integration"],
      github: "https://github.com/arpit-deshmukh/air-quality-intelligence-platform-v2",
      live: "https://air-quality-intelligence-platform-v.vercel.app/",
      image:
       "/project-assets/AQI.png",
    },

    {
      title: "EcoPulse – Economy Insights Platform",
      description:
        "An interactive platform visualizing GDP, inflation, trade data, and economic trends using charts and clean dashboards. Helps users understand macro-economic indicators.",
      tech: ["JavaScript", "Tailwind", "Charts"],
      github: "#",
      live: "https://ecopulse-v1.netlify.app/",
      image:
        "/project-assets/eco.png",
    },

    {
      title: "Algorithm Visualizer",
      description:
        "A visual learning tool that demonstrates how sorting algorithms work step-by-step with animations. Built for students to understand DSA clearly.",
      tech: ["React", "Firebase", "CSS"],
      github: "https://github.com/arpit-deshmukh/Algorithm-visualiser",
      live: "https://algo-visualizer-v1.netlify.app/",
      image:
         "/project-assets/algo.png",
    },

    {
      title: "Personal Portfolio V2",
      description:
        "A modern, minimal, card-based portfolio showcasing projects, activities, education, and research. Built with React and Tailwind for speed and polish.",
      tech: ["React", "Vite", "TailwindCSS"],
      github: "https://github.com/arpit-deshmukh/Portfolio-Arpit-Deshmukh-v2",
      live: "#",
      image:
      "/project-assets/pf.png",
    },
  ];


  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">

      {/* page title  */}
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      {/* grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            {/* image */}
            <img
            
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            {/* content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold">{project.title}</h2>

              <p className="text-gray-300 mt-2">{project.description}</p>

              {/* tech tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* links */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}
