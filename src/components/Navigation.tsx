import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/webfast-logo.png";

const WHATSAPP_BASE = "https://wa.me/233505403729";
const WHATSAPP_GENERAL = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello, I want a website. I would like to get started.")}`;

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Our Works", href: "#works" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 top-4 z-50 mx-auto max-w-5xl px-4 transition-all duration-300 ${
          isScrolled ? "top-2" : "top-4"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="glass-nav flex items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="WebFast Studios" className="h-8 w-8" />
            <span className="hidden font-semibold text-foreground sm:block">
              WebFast
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Book Now Button */}
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button hidden px-5 py-2.5 text-sm md:block"
          >
            <span className="text-background font-semibold">Book Now</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-white/10 md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-out panel */}
            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-72 glass-card rounded-l-2xl p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="WebFast Studios" className="h-8 w-8" />
                  <span className="font-semibold text-foreground">WebFast</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-foreground transition-colors hover:bg-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-lg text-muted-foreground transition-colors hover:text-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <a
                  href={WHATSAPP_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-button mt-4 w-full px-5 py-3 text-center"
                >
                  <span className="text-background font-semibold">Book Now</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
