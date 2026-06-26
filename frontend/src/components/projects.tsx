import { motion } from "framer-motion";
import { LayoutGrid } from "./ui/layout-grid";
import Project1 from "./ui/projects/project-1";
import Project2 from "./ui/projects/project-2";
import Project3 from "./ui/projects/project-3";
import Project4 from "./ui/projects/project-4";
import Project5 from "./ui/projects/project-5";
import Project6 from "./ui/projects/project-6";
import Project7 from "./ui/projects/project-7";

const projectCards = Project1();
const projectCards2 = Project2();
const projectCards3 = Project3();
const projectCards4 = Project4();
const projectCards5 = Project5();
const projectCards6 = Project6();
const projectCards7 = Project7();

const projectItems = [
  {
    key: 1,
    label: "Network Tracking System Application",
    description:
      "A desktop application developed using Java and Java UI stores information on a SQLite database. It tracks all connected devices on an active internet connection.",
    tags: ["Java", "SQLite", "Desktop"],
    gradient: "from-blue-500 to-indigo-500",
    cards: projectCards,
  },
  {
    key: 2,
    label: "DTS: Document Tracking System",
    description:
      "A website application built using PHP with the CodeIgniter framework. It tracks all documents requested by the client to its users.",
    tags: ["PHP", "CodeIgniter", "MySQL"],
    gradient: "from-emerald-500 to-teal-500",
    cards: projectCards2,
  },
  {
    key: 3,
    label: "Meditrace: COVID-19 Information System",
    description:
      "A website application built using PHP with the CodeIgniter framework storing all information about COVID-19 vaccine facilities.",
    tags: ["PHP", "CodeIgniter", "MySQL"],
    gradient: "from-rose-500 to-pink-500",
    cards: projectCards3,
  },
  {
    key: 4,
    label: "PRECALGURO: AI Learning Management System",
    description:
      "A desktop application with Deep Learning AI developed using Python with PyQt. Uses Google Firebase for cloud-based data storage.",
    tags: ["Python", "PyQt", "Firebase", "AI"],
    gradient: "from-purple-500 to-violet-500",
    cards: projectCards4,
  },
  {
    key: 5,
    label: "Journey AI Chatbot",
    description:
      "A website application chatbot built using Python with Flask framework. Helps customers answer queries and get product recommendations.",
    tags: ["Python", "Flask", "AI", "Chatbot"],
    gradient: "from-amber-500 to-orange-500",
    cards: projectCards5,
  },
  {
    key: 6,
    label: "FMSS ServiceFlow",
    description:
      "A ticketing application triage that tracks and manages operations issues.",
    tags: ["Microsoft", "Power Apps", "Power BI", "Power Automate"],
    gradient: "from-amber-500 to-orange-500",
    cards: projectCards6,
  },
  {
    key: 7,
    label: "Solus+ Parse AI",
    description:
      "A Django-based API, for document parsing levaraging PaddleOCR for text extraction. It is designed for scalability, running on Azure Container Registry.",
    tags: ["Python", "Django", "Azure", "Postgres"],
    gradient: "from-amber-500 to-orange-500",
    cards: projectCards7,
  },
];

const Projects = () => {
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-cyan-300 mb-4 border border-cyan-500/20">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectItems.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col">
                {/* Image preview */}
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-white/5">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
                  />
                  <div className="h-full w-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <LayoutGrid cards={project.cards} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-cyan-300 transition-all duration-300">
                    {project.label}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/5 text-white/50 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;