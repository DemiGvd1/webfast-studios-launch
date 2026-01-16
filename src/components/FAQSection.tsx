import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "We deliver most websites within 48 hours of receiving all your content. Complex projects may take a bit longer, but we'll always give you a clear timeline upfront.",
  },
  {
    question: "Do I need to provide my own content?",
    answer:
      "Yes, you'll need to provide your business information, images, and text content. We can guide you on what's needed and help organize everything for the best presentation.",
  },
  {
    question: "When do I pay?",
    answer:
      "You only pay after we show you a demo of your website. Once you approve the design and are happy with it, you make payment and we take your site live.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! All our websites are designed mobile-first and look great on phones, tablets, and desktops. We test on multiple devices to ensure a perfect experience.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes, we include revisions in all our packages. We want you to be completely satisfied with your website before it goes live.",
  },
];

const FAQSection = () => {
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card overflow-hidden border-0 px-6"
              >
                <AccordionTrigger className="py-5 text-left text-foreground hover:no-underline hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
