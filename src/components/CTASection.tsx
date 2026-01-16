import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/233505403729";
const WHATSAPP_GENERAL = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello, I want a website. I would like to get started.")}`;

const CTASection = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          className="glass-card relative mx-auto max-w-3xl overflow-hidden p-8 text-center sm:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brand-purple blur-[100px]" />
          </div>

          <div className="relative z-10">
            <motion.h2
              className="mb-4 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to get your <span className="gradient-text">website?</span>
            </motion.h2>

            <motion.p
              className="mx-auto mb-8 max-w-md text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Chat with us on WhatsApp and let's get started.
            </motion.p>

            <motion.a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button inline-flex items-center gap-3 px-8 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="h-5 w-5 text-background" />
              <span className="text-lg font-semibold text-background">
                Chat on WhatsApp
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
