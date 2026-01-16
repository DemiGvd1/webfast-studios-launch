import { motion } from "framer-motion";
import { MessageCircle, Eye, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contact us on WhatsApp",
    description: "Tell us about your business and website needs",
  },
  {
    number: "02",
    icon: Eye,
    title: "We design and show you a demo",
    description: "Review your custom website design before committing",
  },
  {
    number: "03",
    icon: Rocket,
    title: "After approval, you make payment and we go live",
    description: "Your website goes live within hours of payment",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            How It <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Connection line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-brand-purple to-accent/20 sm:left-1/2 sm:block sm:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                } items-start gap-6`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Number circle */}
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-brand-purple shadow-lg shadow-accent/20 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <span className="text-xl font-bold text-background">
                    {step.number}
                  </span>
                </div>

                {/* Content card */}
                <div
                  className={`glass-card ml-20 flex-1 p-6 sm:ml-0 sm:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto sm:text-left"
                  }`}
                >
                  <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                    <step.icon className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
