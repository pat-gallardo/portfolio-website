import { motion } from "framer-motion";
import Skills from "./skills";

const educationItems = [
  {
    label: "SCIENCE & TECHNOLOGY ENGINEERING MATHEMATICS",
    date: "2018 - 2019",
    school: "Del Pilar Academy",
    city: "Imus City, Cavite",
  },
  {
    label: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
    date: "2020 - 2023",
    school: "Technological University of the Philippines",
    city: "Manila City, NCR",
  },
];

const professionalItems = [
  {
    label: "SOFTWARE DEVELOPER",
    date: "2025 - Present",
    company: "First Maritime Shared Services, Inc.",
    description: {
      1: "Built a Django-based parsing engine that automated data extraction for 10 document types, reducing manual data entry by 85%",
      2: "Architected Azure cloud infrastructure maintaining 95% uptime for Document parsing application.",
      3: "Optimized Application performance, resulting in a 40% improvement in document processing latency and supporting the handling of 10000 monthly files.",
      4: "Engineered an n8n automation suite for 5 Business Units that accelerated lead generation by 480x.",
      5: "Transformed a manual 8-hour lead sourcing process into a 60-second automated workflow, reducing operational overhead by 70% while maintaining 100% data accuracy.",
      6: "Developed an ATS and Ticketing System supporting the Operations and Recruitment Department.",
    },
  },
  {
    label: "AI SOFTWARE DEVELOPER ASSOCIATE",
    date: "2023 - 2024",
    company: "Journey Better Business Group Inc.",
    description: {
      1: "Developed software solutions to automate customer operations and enhance services",
      2: "Developed and enhanced web-based AI software platforms",
      3: "Enhanced existing code developed and add useful features that greatly improves the quality of software that increased user interaction by 10%.",
      4: "Debugged existing AI software programs to ensure seamless operation",
      5: "Gathered and filtered production-based data used in creating diagnostic, data reviews and data presentations",
      6: "Developed data filtering queries that ensures proper gathering of data.",
    },
  },
  {
    label: "BACKEND API DEVELOPMENT INTERN",
    date: "2023 - 2023",
    company: "4Gives",
    description: {
      1: "Developed and tested API services that enhance the operations and features being developed",
      2: "Developed testing parameters and automatic API testing using API testing applications for seamless coding",
    },
  },
];

const Resume = () => {
  return (
    <section className="relative min-h-screen px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-amber-300 mb-4 border border-amber-500/20">
            My Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-indigo-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Education & Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-sm">
                🎓
              </span>
              Education
            </motion.h3>

            <div className="space-y-4 mb-12">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass rounded-xl p-5 hover:border-indigo-500/30 transition-all duration-300 border border-white/5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {item.label}
                  </h4>
                  <p className="text-white/50 text-sm">
                    {item.school} — {item.city}
                  </p>
                </motion.div>
              ))}
            </div>

            <Skills />
          </div>

          {/* Right Column - Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-indigo-500 flex items-center justify-center text-sm">
                💼
              </span>
              Experience
            </motion.h3>

            <div className="space-y-4">
              {professionalItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="glass rounded-xl p-5 hover:border-amber-500/30 transition-all duration-300 border border-white/5"
                >
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {item.label}
                  </h4>
                  <p className="text-cyan-300/70 text-sm mb-3">{item.company}</p>
                  <ul className="space-y-2">
                    {Object.values(item.description).map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 mt-1.5 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;