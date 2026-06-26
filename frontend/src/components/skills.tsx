import { motion } from "framer-motion";

const Skills = () => {
  const skillsItems = [
    "Programming (Windows, Mac)",
    "Relational and Non-Relational Databases",
    "Cross-platform Software Testing/ Unit Testing",
    "Application Deployment",
    "Git Versioning",
    "Machine Learning",
    "Agentic AI",
    "Conversational AI",
    "AI Automation"
  ];

  const expertiseItems = [
    { name: "Python", level: 90 },
    { name: "Flask", level: 80 },
    { name: "Django", level: 85 },
    { name: "React / TypeScript", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "PHP / CodeIgniter", level: 70 },
    { name: "SQL / Postgres", level: 80 },
    { name: "n8n / Power Automate", level: 90 },
  ];

  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
      >
        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-sm">
          ⚡
        </span>
        Skills & Expertise
      </motion.h3>

      {/* Expertise Progress Bars */}
      <div className="glass rounded-xl p-5 mb-6 border border-white/5">
        <h4 className="text-white/70 text-sm font-medium mb-4">Technical Expertise</h4>
        <div className="space-y-3">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
            >
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white/80">{item.name}</span>
                <span className="text-white/40">{item.level}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills List */}
      <div className="glass rounded-xl p-5 border border-white/5">
        <h4 className="text-white/70 text-sm font-medium mb-4">Core Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skillsItems.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-white/70 border border-white/5 
                         hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;