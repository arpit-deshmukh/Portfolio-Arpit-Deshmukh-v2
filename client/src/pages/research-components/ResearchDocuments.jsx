export default function ResearchDocuments() {
    const documents = [
         {
            title: "Medium Articles on AQI",
            description:
                "An exploratory document analyzing AQI trends across urban and semi-urban regions, focusing on construction activity, traffic density, and seasonal variation.",
            file: "/pdfs/aqi-patterns.pdf",
        },
        {
            title: "Air Quality Patterns in Urban Zones",
            description:
                "An exploratory document analyzing AQI trends across urban and semi-urban regions, focusing on construction activity, traffic density, and seasonal variation.",
            file: "/pdfs/aqi-patterns.pdf",
        },
        {
            title: "Construction Activity & Temporary AQI Spikes",
            description:
                "Observational notes on how aggressive construction near residential and academic areas can temporarily increase particulate matter levels.",
            file: "/pdfs/construction-impact.pdf",
        },
        {
            title: "Student Mobility & Micro-Pollution Exposure",
            description:
                "A conceptual study examining daily student travel routes and localized pollution exposure around colleges and hostels.",
            file: "/pdfs/mobility-exposure.pdf",
        },
    ];

    return (
        <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">

            <h1 className="text-4xl font-bold mb-6">
                Research Documents & Explorations
            </h1>

            <p className="text-gray-300 max-w-3xl mb-12 leading-relaxed">
                This section contains exploratory research notes and documents created
                as part of learning and awareness-driven projects. These are not formal
                academic publications, but conceptual studies aimed at understanding
                real-world patterns and communicating insights clearly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {documents.map((doc, idx) => (
                    <div
                        key={idx}
                        className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md"
                    >
                        <h2 className="text-2xl font-semibold">
                            {doc.title}
                        </h2>

                        <p className="text-gray-300 mt-3 leading-relaxed">
                            {doc.description}
                        </p>

                        <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-blue-400 font-medium hover:underline"
                        >
                            📄 View PDF →
                        </a>
                    </div>
                ))}
            </div>

            <p className="text-sm text-gray-400 mt-16 max-w-3xl">
                Disclaimer: These documents are shared for educational and awareness
                purposes only. They do not represent certified measurements, official
                studies, or policy recommendations.
            </p>

        </section>
    );
}
