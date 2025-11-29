export default function Quotes() {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Experience is the name everyone gives to their mistakes.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "Clean code always looks like it was written by someone who cares.",
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    "Consistency is more important than intensity.",
    "Learning to write programs stretches your mind.",
    "Readability counts.",
    "Slow is smooth, smooth is fast.",
    "If you want to go fast, go alone. If you want to go far, go together.",
    "What gets measured, gets improved.",
    "Your future is created by what you do today, not tomorrow.",
    "Discipline beats motivation.",
    "You don’t need to be perfect. You need to start.",
    "Small progress is still progress.",
    "The best way to learn is by building.",
    "Effort is the currency of mastery.",
    "Struggle is the evidence of progress.",
    "Successful developers are not gifted—they are consistent."
  ];

  return (
    <section className="pt-28 pb-20 px-6 max-w-4xl mx-auto text-white">

      <h1 className="text-4xl font-bold mb-10">Developer Quotes</h1>

      <div className="space-y-6">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md"
          >
            <p className="text-gray-300">“{q}”</p>
          </div>
        ))}
      </div>

    </section>
  );
}
