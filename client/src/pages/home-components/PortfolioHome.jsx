import ComputerIcon from "@mui/icons-material/Computer";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ArticleIcon from "@mui/icons-material/Article";

export default function PortfolioHome() {
  const portfolioItems = [
    {
      title: "Technical Projects",
      description:
        "A collection of full-stack, MERN, and real-world applications.",
      link: "/projects",
      icon: <ComputerIcon />,
    },
    {
      title: "Activities & Clubs",
      description:
        "Active participation and experiences in clubs, sessions, and student-led programs.",
      link: "/activities",
      icon: <TrackChangesIcon />,
    },
    {
      title: "Research & Articles",
      description:
        "Research, reports, and thoughtful analysis on topics across computer science and software development.",
      link: "#",
      icon: <ArticleIcon />,
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-10">
        Portfolio Overview
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="
              card
              card-glow
              card-pop
              card-pressable
              card-enter
              p-6
              block
            "
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <div className="text-4xl text-blue-400">
              {item.icon}
            </div>

            <h2 className="text-2xl font-semibold mt-4">
              {item.title}
            </h2>

            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
