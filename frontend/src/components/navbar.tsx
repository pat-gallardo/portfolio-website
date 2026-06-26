import { motion } from "framer-motion";

interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { value: "home", label: "Home", icon: "⌂" },
  { value: "about", label: "About", icon: "◈" },
  { value: "resume", label: "Resume", icon: "◎" },
  { value: "services", label: "Services", icon: "✦" },
  { value: "projects", label: "Projects", icon: "◆" },
  { value: "contact", label: "Contact", icon: "✉" },
];

const Navbar: React.FC<NavbarProps> = ({ activePage, onPageChange }) => {
  return (
    <>
      {/* Desktop floating nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <div className="glass-strong rounded-2xl px-1 py-1 flex items-center gap-0.5 shadow-2xl">
          {menuItems.map((item) => {
            const isActive = activePage === item.value;
            return (
              <button
                key={item.value}
                onClick={() => onPageChange(item.value)}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-cyan-500/40 rounded-xl border border-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xs">{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
        <div className="glass-strong rounded-2xl px-2 py-1.5 flex items-center justify-around shadow-2xl">
          {menuItems.map((item) => {
            const isActive = activePage === item.value;
            return (
              <button
                key={item.value}
                onClick={() => onPageChange(item.value)}
                className={`relative flex flex-col items-center gap-0.5 py-2 px-3 rounded-xl transition-all duration-300 ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 rounded-xl border border-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 text-lg">{item.icon}</span>
                <span
                  className={`relative z-10 text-[10px] font-medium ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Spacer for desktop */}
      <div className="h-20 hidden sm:block" />
    </>
  );
};

export default Navbar;