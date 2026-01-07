export default function ArticlePage() {
    const mainArticle = {
        title: "Deep Dive into AQI Analysis",
        description: "My primary publication on Medium discussing the impact of urban density on air quality. This article covers data collection methods and long-term trends observed in metropolitan areas.",
        link: "https://medium.com/your-profile/aqi-analysis",
        date: "October 2023"
    };

    const otherArticles = [
        {
            title: "Tech Stack for Climate Data",
            link: "https://medium.com/your-profile/tech-stack",
            platform: "Medium"
        },
        {
            title: "Understanding Particulate Matter",
            link: "https://medium.com/your-profile/pm-levels",
            platform: "LinkedIn"
        },
        {
            title: "The Future of Urban Sensing",
            link: "https://medium.com/your-profile/urban-sensing",
            platform: "Medium"
        }
    ];

    return (
        <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white">
            <h1 className="text-4xl font-bold mb-6">Articles & Publications</h1>
            <p className="text-gray-300 max-w-3xl mb-12 leading-relaxed">
                Exploring the intersection of data science and environmental impact through 
                written word. Here you'll find my featured long-form content and quick insights.
            </p>

            <div className="mb-16">
                <h2 className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-4">Featured Publication</h2>
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 rounded-2xl backdrop-blur-lg shadow-xl">
                    <span className="text-xs text-gray-400">{mainArticle.date}</span>
                    <h3 className="text-3xl font-bold mt-2 mb-4">{mainArticle.title}</h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {mainArticle.description}
                    </p>
                    <a 
                        href={mainArticle.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                    >
                        Read on Medium →
                    </a>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-6">More Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherArticles.map((article, idx) => (
                        <div 
                            key={idx}
                            className="flex flex-col justify-between bg-white/5 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-colors"
                        >
                            <div>
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-tighter">
                                    {article.platform}
                                </span>
                                <h4 className="text-xl font-semibold mt-2 mb-6">
                                    {article.title}
                                </h4>
                            </div>
                            
                            <a 
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 font-medium hover:text-blue-300 flex items-center gap-2"
                            >
                                View Article <span className="text-lg">↗</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}