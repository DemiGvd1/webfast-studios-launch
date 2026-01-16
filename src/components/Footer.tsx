import { motion } from "framer-motion";
import logo from "@/assets/webfast-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="section-container">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo and brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="WebFast Studios" className="h-10 w-10" />
            <span className="text-xl font-semibold text-foreground">
              WebFast Studios
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground">
            Professional websites made simple
          </p>

          {/* WhatsApp note */}
          <p className="text-sm text-muted-foreground">
            WhatsApp only
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            © 2026 WebFast Studios. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
