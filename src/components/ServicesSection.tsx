import { motion } from "framer-motion";
import { Palette, Smartphone, Zap, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Professional website design",
    description: "Custom designs that reflect your brand identity",
  },
  {
    icon: Smartphone,
    title: "Mobile-friendly layouts",
    description: "Responsive designs that work on all devices",
  },
  {
    icon: Zap,
    title: "Fast delivery (under 48 hours)",
    description: "Quick turnaround without compromising quality",
  },
  {
    icon: Sparkles,
    title: "Clean and modern UI",
    description: "Sleek interfaces that impress visitors",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            What We <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card group p-6 transition-all hover:scale-105 hover:bg-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 transition-colors group-hover:bg-accent/30">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
