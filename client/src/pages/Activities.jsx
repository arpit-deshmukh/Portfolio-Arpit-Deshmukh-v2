export default function Activities() {
const activities = [
  {
    title: "ITESA — IT Engineering Students Association",
    description:
      "Actively contributed to departmental events, peer-learning circles, and student-led initiatives. Participated and cunducted   workshops on technology, problem-solving, and teamwork.",
    image: "/activities/arpit_1.png",
  },
  {
    title: "Tarkashastra : Debate & Communication Club",
    description:
      "Took part in debates, group discussions, MUN  and public-speaking sessions. Developed articulation, negotiation ,diplomatic skills and confidence through continuous practice and partiicpation.",
    image: "/activities/t2.png",
  },
  // {
  //   title: "Technical Events & Hackathons",
  //   description:
  //     "Participated and volunteered in coding competitions, college tech fests, and hackathons. Explored real-world problem-solving and team-based project execution.",
  //   image: "/activities/tech-events.jpg",
  // },
  // {
  //   title: "Workshops & Skill-Building Sessions",
  //   description:
  //     "Attended wo.",
  //   image: "/activities/workshops.jpg",
  // },
];


  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">

      {/* section title  */}
      <h1 className="text-4xl font-bold mb-10">Activities & Experiences</h1>

      <div className="space-y-12">
        {activities.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            {/* image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-lg"
            />

            {/* content */} 
            <div>
              <h2 className="text-2xl font-semibold">{item.title}</h2>

              <p className="text-gray-300 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
