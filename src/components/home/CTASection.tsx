import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 industrial-grid opacity-10" />

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-copper-400 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-secondary blur-3xl"
      />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-700 text-copper-300 text-sm font-medium mb-8">
              Ready to Get Started?
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              <span className="text-secondary">Transform</span> Your Manufacturing
              <br className="hidden md:block" />
              With DeltaWorks
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg lg:text-xl text-navy-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              From precision prototypes to high-volume production, we're ready to bring
              your vision to life with Dutch engineering excellence.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl px-8 group transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Request a Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white text-primary hover:bg-white/90 transition-all duration-300"
              >
                <a href="tel:+31201234567" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +31 20 123 4567
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Trust Badges */}
          <AnimatedSection delay={0.4} className="mt-16">
            <div className="flex flex-wrap items-center justify-center gap-8 text-navy-300 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
                </svg>
                ISO 9001:2015 Certified
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
                </svg>
                AS9100 Aerospace
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
                </svg>
                ISO 13485 Medical
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
