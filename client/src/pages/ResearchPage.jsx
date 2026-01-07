

export default function ResearchPage() {
  const research = [
    {
      title: "Air Quality Patterns & Urban Exposure",
      description:
        "An exploratory study focusing on how construction density, traffic flow, and seasonal changes influence AQI levels in urban and semi-urban regions. The aim is awareness and understanding, not precise measurement.",
      image: "/research/aqi_patterns.png",
    },
    {
      title: "Student Mobility & Micro-Pollution Zones",
      description:
        "A conceptual exploration of daily student movement around colleges and hostels, identifying localized pollution pockets that are often ignored in city-level AQI discussions.",
      image: "/research/student_mobility.png",
    },
    {
      title: "Construction Activity & Temporary AQI Spikes",
      description:
        "This research examines how aggressive construction near residential and academic areas can cause short-term AQI spikes, impacting health even outside major metro cities.",
      image: "/research/construction_impact.png",
    },
    {
      title: "Communicating AQI Data to Non-Technical Users",
      description:
        "A research-driven attempt to understand how AQI data can be simplified and visualized to improve public awareness, focusing on clarity, context, and storytelling.",
      image: "/research/data_communication.png",
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">
      
      <h1 className="text-4xl font-bold mb-6">
        Research & Explorations
      </h1>

      <p className="text-gray-300 max-w-3xl mb-12 leading-relaxed">
        This section highlights exploratory and conceptual research carried out
        as part of awareness-driven projects. These efforts are not formal
        academic publications but learning-oriented studies focused on
        understanding real-world patterns and communicating insights clearly.
      </p>

      <div className="space-y-12">
        {research.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-lg"
            />

            <div>
              <h2 className="text-2xl font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-300 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-400 mt-16 max-w-3xl">
        Disclaimer: These research explorations are intended for educational and
        awareness purposes only. They do not represent certified measurements,
        official studies, or policy recommendations.
      </p>

    </section>
  );
}
