import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/about";
import Resume from "./components/resume";
import Services from "./components/services";
import Projects from "./components/projects";
import Contacts from "./components/Contacts";
import FooterPage from "./components/Footer";
import "./App.css";

type Page = "home" | "about" | "resume" | "services" | "projects" | "contact";

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.97 },
};

const pageTransition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 0.5,
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>("home");

  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const target = (e as CustomEvent<string>).detail;
      if (target) setActivePage(target as Page);
    };
    window.addEventListener("navigate", handleNavigate);
    return () => window.removeEventListener("navigate", handleNavigate);
  }, []);


  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Intro key="home" />;
      case "about":
        return <About key="about" />;
      case "resume":
        return <Resume key="resume" />;
      case "services":
        return <Services key="services" />;
      case "projects":
        return <Projects key="projects" />;
      case "contact":
        return (
          <>
            <Contacts key="contact" />
          </>
        );
      default:
        return <Intro key="home" />;
    }
  };

  return (
    <div className="animated-bg grid-overlay min-h-screen relative">
      {/* Ambient gradient orbs */}
      <div className="fixed top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />
      <div className="fixed top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-amber-500/8 blur-[100px] pointer-events-none" />

      <Navbar activePage={activePage} onPageChange={(page) => setActivePage(page as Page)} />

      <main className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {activePage !== "contact" && <FooterPage />}
    </div>
  );
};

export default App;