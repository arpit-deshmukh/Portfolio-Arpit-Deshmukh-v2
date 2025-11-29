export default function Activities() {
  const activities = [
    {
      title: "ITESA (IT Engineering Students Association)",
      description:
        "Participated in departmental events, workshops, peer learning circles, and multiple student-driven initiatives. This is placeholder text; you can customize fully later.",
      image: "https://via.placeholder.com/600x400?text=Activity+Image+1",
    },
    {
      title: "Debate & Communication Club",
      description:
        "Engaged in debate sessions, communication workshops, and public-speaking activities that helped build confidence and clarity.",
      image: "https://via.placeholder.com/600x400?text=Activity+Image+2",
    },
    {
      title: "College Technical Events",
      description:
        "Volunteered and participated in technical fests, hackathons, coding competitions, and flagship events. Replace this text with real details.",
      image: "https://via.placeholder.com/600x400?text=Activity+Image+3",
    },
    {
      title: "Workshops & Seminars",
      description:
        "Attended various workshops on technology, leadership, communication, and self-development. This text can be completely modified later.",
      image: "https://via.placeholder.com/600x400?text=Activity+Image+4",
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">

      {/* SECTION TITLE */}
      <h1 className="text-4xl font-bold mb-10">Activities & Experiences</h1>

      <div className="space-y-12">
        {activities.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-lg"
            />

            {/* CONTENT */}
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
