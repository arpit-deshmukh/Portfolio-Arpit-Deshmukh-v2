import { motion } from "framer-motion";


export default function HeroAbout() {
  return (
    <section className="pt-32 pb-20 text-white px-6 max-w-6xl mx-auto">
      
      <div className="grid md:grid-cols-2 gap-16 items-center">


{/* left image card  */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full flex justify-center md:justify-start md:-ml-10"
        >
          <div className="relative rounded-2xl p-1 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-600/40 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/core/logo/logo_3.png"
                alt="Arpit"
                className="w-full h-[380px] object-cover opacity-90"
              />
            </div>
          </div>
        </motion.div>

        {/* right side */}
        <div>
  
           <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold leading-tight"
      >
        Hi, I'm <span className="text-blue-400">Arpit</span>
      </motion.h1>
      <br/>
      


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-300 mt-4 text-lg md:text-xl"
          >
            Developer • Designer • Learner.
          </motion.p>

     {/* description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-400 mt-4 max-w-xl leading-relaxed"
          >
            Building practical projects, designing systems, and learning deeply
            across computer science and software development.
          </motion.p>

     {/* buttons  */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600/80 hover:bg-blue-600 transition rounded-lg font-medium"
            >
              View Projects
            </a>

            <a
              href="/about"
              className="px-6 py-3 border border-gray-600 hover:border-white transition rounded-lg font-medium"
            >
              About Me
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
