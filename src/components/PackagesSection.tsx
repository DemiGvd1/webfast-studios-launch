import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/233505403729";

const packages = [
  {
    name: "START",
    price: "GHS 900",
    description: "Perfect for small businesses",
    features: [
      "One-page website",
      "Business information",
      "Contact details",
      "Mobile-friendly layout",
    ],
    message: "Hello, I want a website. I'm interested in the Start package.",
    highlighted: false,
  },
  {
    name: "SCALE",
    price: "GHS 1,700",
    description: "Most popular choice",
    features: [
      "3–5 page website",
      "Services section",
      "Image gallery",
      "Better animations and structure",
    ],
    message: "Hello, I want a website. I'm interested in the Scale package.",
    highlighted: true,
  },
  {
    name: "PRIME",
    price: "GHS 2,600",
    description: "For growing businesses",
    features: [
      "Advanced multi-page website",
      "Booking or inquiry forms",
      "Premium UI & animations",
      "Priority delivery",
    ],
    message: "Hello, I want a website. I'm interested in the Prime package.",
    highlighted: false,
  },
  {
    name: "CUSTOM BUILD",
    price: "Custom",
    description: "Tailored solutions",
    features: [
      "Special requirements",
      "Payment systems",
      "Complex or unique websites",
      "Dedicated support",
    ],
    message: "Hello, I want a custom website. Can we discuss my requirements?",
    highlighted: false,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="relative py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Package</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Simple pricing with no hidden fees
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`glass-card relative overflow-hidden p-6 transition-all hover:scale-105 ${
                pkg.highlighted
                  ? "border-accent/50 shadow-lg shadow-accent/20"
                  : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Popular badge */}
              {pkg.highlighted && (
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-accent/20 px-3 py-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="text-xs font-medium text-accent">Popular</span>
                </div>
              )}

              {/* Package name */}
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="mb-2">
                <span className="text-3xl font-bold text-foreground">
                  {pkg.price}
                </span>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm text-muted-foreground">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(pkg.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full rounded-xl py-3 text-center font-semibold transition-all ${
                  pkg.highlighted
                    ? "gradient-button"
                    : "border border-white/20 bg-white/5 text-foreground hover:bg-white/10"
                }`}
              >
                <span className={pkg.highlighted ? "text-background" : ""}>
                  Get Started
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
