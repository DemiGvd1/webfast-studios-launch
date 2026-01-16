import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImageIcon } from "lucide-react";

// Placeholder for future portfolio items
const portfolioItems: { id: number; image: string; alt: string }[] = [];

const WorksSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="works" className="relative py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of our recent projects
          </p>
        </motion.div>

        {portfolioItems.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="glass-card group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="glass-card mx-auto max-w-md p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <ImageIcon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Portfolio Coming Soon
            </h3>
            <p className="text-muted-foreground">
              Our amazing project gallery is being prepared. Check back soon!
            </p>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6 text-foreground" />
              </button>
              <motion.img
                src={selectedImage}
                alt="Portfolio preview"
                className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorksSection;
