import { motion } from "framer-motion";

const About = () => {
  const aboutMessage =
    "I am Patrick and I develop applications that improve and raise your business' income by leveraging advanced analytics, automation and user-friendly interfaces to streamline operations and enhance customer engagement.";
  const aboutNextMessage =
    "I use AI and machine learning in developing applications and I am also updated on latest development practices like AGILE and SCRUM.";

  const highlights = [
    { label: "3+", sub: "Years Experience" },
    { label: "5+", sub: "Projects Done" },
    { label: "5+", sub: "Technologies" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-6xl w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-cyan-300 mb-4 border border-cyan-500/20">
            Who I Am
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
              <div className="relative glass-strong rounded-2xl p-2">
                <img
                  className="w-72 sm:w-80 h-auto rounded-xl object-cover"
                  src={require("../assets/images/front-photo2.png")}
                  alt="about-photo"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/70 text-lg leading-relaxed mb-4"
            >
              {aboutMessage}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              {aboutNextMessage}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 text-center hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-indigo">
                    {h.label}
                  </div>
                  <div className="text-white/50 text-xs sm:text-sm mt-1">
                    {h.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;