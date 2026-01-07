export default function Activities() {
  const activities = [
    {
      title: "ITESA — IT Engineering Students Association",
      description:
        "Actively contributed to departmental events, peer-learning circles, and student-led initiatives. Participated in and conducted workshops focused on technology, collaboration, and problem-solving.",
      image: "/activities/arpit_1.png",
    },
    {
      title: "Tarkashastra — Debate & Communication Club",
      description:
        "Participated in debates, group discussions, MUNs, and public-speaking sessions. Developed articulation, negotiation, and diplomatic skills through consistent practice.",
      image: "/activities/t2.png",
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-10">
        Activities & Experiences
      </h1>

      <div className="space-y-12">
        {activities.map((item, idx) => (
          <div
            key={idx}
            className="
              card
              card-pressable
              card-hover-soft
              
              p-6
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
            "
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            {/* image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-lg"
            />

            {/* content */}
            <div>
              <h2 className="text-2xl font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-300 mt-3 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
