import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";

const Intro = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pb-16 sm:pb-0">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-16 lg:gap-24 max-w-6xl w-full">
        {/* Text content */}
        <div className="flex-1 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-indigo-300 mb-6 border border-indigo-500/20">
              Software Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight"
          >
            <span className="text-white/80">Hi, I'm</span>{" "}
            <span className="gradient-text">Patrick Gallardo</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl text-white/60 mb-8 flex items-center gap-2 justify-center sm:justify-start"
          >
            <span>Professional</span>
            <FlipWords
              words={[
                "Software Developer",
                "AI Developer",
                "Python Developer",
              ]}
              className="text-white font-semibold"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center sm:justify-start"
          >
            <Button
              onClick={() => {
                const event = new CustomEvent("navigate", { detail: "projects" });
                window.dispatchEvent(event);
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium text-sm 
                         hover:from-indigo-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-indigo-500/25"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const event = new CustomEvent("navigate", { detail: "contact" });
                window.dispatchEvent(event);
              }}
              className="px-6 py-3 rounded-xl glass-strong text-white/80 font-medium text-sm 
                         hover:text-white hover:border-white/20 transition-all duration-300"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0 relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 blur-3xl" />
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-cyan-500 to-amber-500 p-[2px] animate-spin-slow">
              <div className="absolute inset-0 rounded-full bg-[#0a0a0f]" />
            </div>
            <div className="absolute inset-1 rounded-full overflow-hidden bg-[#0a0a0f]">
              <img
                className="w-full h-full object-cover float-anim"
                src={require("../assets/images/front-photo.png")}
                alt="profile-photo"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;