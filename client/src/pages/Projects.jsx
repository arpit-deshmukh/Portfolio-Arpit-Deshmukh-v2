export default function Projects() {
  const projects = [
    {
      title: "EcoPulse – Economy Insights Platform",
      description:
        "An interactive platform visualizing GDP, inflation, trade data, and economic trends using charts and clean dashboards.",
      tech: ["JavaScript", "Tailwind", "Charts"],
      github: "#",
      live: "https://ecopulse-v1.netlify.app/",
      image: "/project-assets/eco.png",
    },
    {
      title: "Air Quality Intelligence Platform",
      description:
        "A real-time environmental monitoring platform tracking AQI, pollution metrics, and city-wide air quality statistics.",
      tech: ["React", "Node.js", "API Integration"],
      github:
        "https://github.com/arpit-deshmukh/air-quality-intelligence-platform-v2",
      live: "https://air-quality-intelligence-platform-v.vercel.app/",
      image: "/project-assets/AQI.png",
    },
    {
      title: "Personal Portfolio V2",
      description:
        "A modern, minimal, card-based portfolio built with React and Tailwind.",
      tech: ["React", "Vite", "TailwindCSS"],
      github:
        "https://github.com/arpit-deshmukh/Portfolio-Arpit-Deshmukh-v2",
      live: "https://arpit-deshmukh-v1.netlify.app/",
      image: "/project-assets/pf.png",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "A visual learning tool that demonstrates sorting algorithms step-by-step.",
      tech: ["React", "CSS", "ChartJs"],
      github:
        "https://github.com/arpit-deshmukh/Algorithm-visualiser",
      live: "https://algo-visualizer-v1.netlify.app/",
      image: "/project-assets/algo.png",
    },
    {
      title: "Niwaas – Rental Property Platform",
      description:
        "A rental property management platform using the MERN stack.",
      tech: ["MERN", "JWT", "TailwindCSS"],
      github:
        "https://github.com/arpit-deshmukh/NIwaas-v3-Rental-Propery-management-Platform",
      live: "https://niwaas-v3.vercel.app/",
      image: "/project-assets/Niwaas-s1.png",
    },
    {
      title: "Visuals – WebRTC Video Chat",
      description:
        "A real-time video chat app using WebRTC and Socket.io.",
      tech: ["React", "WebRTC", "CSS"],
      github: "https://github.com/arpit-deshmukh/Visuals_v1",
      live: "#",
      image: "/project-assets/visuals.png",
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="
              card
              card-glow
              card-pressable
              card-hover-pop
              card-hover-soft
              card-enter
            "
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold">
                {project.title}
              </h2>

              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="text-blue-400 hover:underline"
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
