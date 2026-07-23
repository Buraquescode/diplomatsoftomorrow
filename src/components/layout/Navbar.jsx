import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import logo from "../../assets/logo.png"; // adjust path to where you place the logo

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-forest-950/90 backdrop-blur-md border-b border-gold-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Diplomats of Tomorrow logo"
            className="h-20 w-20 md:h-14 md:w-14 object-contain group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="font-serif text-lg md:text-xl text-offwhite tracking-wide">
            Diplomats <span className="text-gold-400">of Tomorrow</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative text-sm tracking-wide transition-colors duration-300 py-1 ${
                  isActive ? "text-gold-400" : "text-offwhite/75 hover:text-offwhite"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-px bg-gold-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button to="/join/team" variant="primary" className="text-sm">
            Join Our Team
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-offwhite"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-forest-950/95 backdrop-blur-md border-t border-gold-500/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base ${isActive ? "text-gold-400" : "text-offwhite/80"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-3 pt-3 border-t border-gold-500/10">
                <Button to="/join/delegate" variant="ghost" onClick={() => setMenuOpen(false)}>
                  Join as Delegate
                </Button>
                <Button to="/join/team" variant="primary" onClick={() => setMenuOpen(false)}>
                  Join Our Team
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}