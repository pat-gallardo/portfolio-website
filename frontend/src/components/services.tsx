import { motion } from "framer-motion";
import Services1 from "./ui/services-1";
import Services2 from "./ui/services-2";
import Services3 from "./ui/services-3";

const servicesData = [
  {
    title: "AI Integration & Machine Learning",
    description:
      "Making AI's that can help your business strive with intelligent automation and predictive analytics.",
    icon: "🧠",
    gradient: "from-purple-500 to-indigo-500",
    component: <Services1 />,
  },
  {
    title: "Website & Application Development",
    description:
      "Making websites that are user-friendly and cross-platform for maximum reach and engagement.",
    icon: "🌐",
    gradient: "from-cyan-500 to-teal-500",
    component: <Services2 />,
  },
  {
    title: "Server & Database Management",
    description:
      "Having server or database issues? Let me know what it is and I'll optimize your infrastructure.",
    icon: "🛡️",
    gradient: "from-amber-500 to-orange-500",
    component: <Services3 />,
  },
];

const Services = () => {
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-indigo-300 mb-4 border border-indigo-500/20">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col">
                {/* Gradient icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl mb-5 
                    group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Image preview */}
                <div className="mt-5 rounded-xl overflow-hidden bg-white/5 h-32 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {service.component}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;