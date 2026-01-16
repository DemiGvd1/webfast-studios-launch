import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustPoints = [
  "Payment after demo approval",
  "Mobile Money accepted",
  "No hidden charges",
];

const TrustSection = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          className="glass-card mx-auto max-w-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">
            Clear pricing. <span className="gradient-text">No surprises.</span>
          </h2>

          <div className="space-y-4">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Check className="h-5 w-5 text-accent" />
                </div>
                <span className="text-lg text-foreground">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
