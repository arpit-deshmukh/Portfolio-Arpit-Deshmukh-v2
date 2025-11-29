export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering (Information Technology)",
      institute: "D. Y. Patil College of Engineering ( DYPCOE ) , Akurdi, Pune",
      year: "2023 – 2027",
      description:
        "Pursuing Bachelor of Engineering in Information Technology, focusing on software development, system fundamentals, and building real-world projects using modern technologies.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institute: "Brijlal biyani college of science and technology , Amravati",
      year: "2021 – 2023",
      description:
        "Studied core science subjects including Physics, Chemistry, and Mathematics, building strong analytical and problem-solving skills.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Manibai Gujarati High School , Amravati",
      year: "2010 – 2021",
      description:
        "Completed my secondary education with strong academic performance and active participation in school-level activities",
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto text-white">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10">Education</h1>

      <div className="space-y-10">

        {educationData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md shadow-sm"
          >
            <h2 className="text-2xl font-semibold">{item.degree}</h2>

            <p className="text-gray-300 mt-1">{item.institute}</p>

            <p className="text-blue-400 font-medium mt-1">{item.year}</p>

            <p className="text-gray-400 mt-3 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
