import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const WHATSAPP_BASE = "https://wa.me/233505403729";
const WHATSAPP_GENERAL = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello, I want a website. I would like to get started.")}`;

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Professional websites made simple";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToPackages = () => {
    const element = document.querySelector("#packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          {/* Headline with typewriter effect */}
          <motion.h1
            className="mb-6 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">{displayText}</span>
            <span
              className={`inline-block h-8 w-1 bg-accent sm:h-10 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mx-auto mb-10 max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We design clean, modern websites for businesses at affordable prices,
            fast delivery and no stress.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button w-full px-8 py-4 text-center sm:w-auto"
            >
              <span className="text-background font-semibold text-lg">Book Now</span>
            </a>
            <button
              onClick={scrollToPackages}
              className="glass-card w-full px-8 py-4 font-semibold text-foreground transition-all hover:bg-white/10 sm:w-auto"
            >
              View Packages
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
      >
        <div className="h-12 w-6 rounded-full border-2 border-muted-foreground/50 p-1">
          <div className="h-2 w-1.5 mx-auto rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
