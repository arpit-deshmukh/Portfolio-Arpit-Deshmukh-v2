
import ComputerIcon from '@mui/icons-material/Computer';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
// import ArticleIcon from '@mui/icons-material/Article';
import ArticleIcon from '@mui/icons-material/Article';
import Projects from "../Projects";

export default function PortfolioHome() {
  const portfolioItems = [
    {
      title: "Technical Projects",
      description: "A collection of full-stack, MERN, and real-world applications.",
      link: "/projects",
      icon: <ComputerIcon />,
    },
    {
      title: "Activities & Clubs",
      description: "Active Participation and Experiences  in clubs ,session and student led programs",
      link: "/activities",
      icon: <TrackChangesIcon />
    },
    {
      title: "Research & Articles",
      description: "Research, reports, and thoughtful analysis on topics across computer science and software development.",
      link: "#",
      icon: "📄",
    },
    
    // {
    //   title: "Achievements",
    //   description: "Competitions, awards, certifications, and major recognitions.",
    //   link: "#",
    //   icon: "",
    // },
    // {
    //   title: "Sessions And Participations",
    //   description: "Public speaking, workshops, tech sessions, and mentoring.",
    //   link: "#",
    //   icon: "",
    // },
  ];

  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">

      <h1 className="text-4xl font-bold mb-10">Portfolio Overview</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {portfolioItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md
                      hover:bg-white/10 transition block shadow-sm"
          >
            <div className="text-4xl">{item.icon}</div>

            <h2 className="text-2xl font-semibold mt-4">{item.title}</h2>

            <p className="text-gray-300 mt-2">{item.description}</p>
          </a>
        ))}

      </div>


    </section>
  );
}
