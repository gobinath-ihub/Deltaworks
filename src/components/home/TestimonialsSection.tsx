import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote: "DeltaWorks has been our trusted manufacturing partner for over a decade. Their precision and reliability are unmatched in the industry.",
    author: "Hans van der Berg",
    role: "VP Operations",
    company: "AutoTech Europe",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "The quality of components we receive consistently exceeds our specifications. DeltaWorks truly understands aerospace-grade manufacturing.",
    author: "Marie Dubois",
    role: "Quality Director",
    company: "AeroSystems NL",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "When we needed to scale production 10x in 3 months, DeltaWorks delivered. Their flexibility and expertise made the impossible possible.",
    author: "Stefan Mueller",
    role: "CEO",
    company: "MedTech Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Client Testimonials
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Trusted by Industry <span className="text-gradient">Leaders</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Hear from the companies that rely on DeltaWorks for their critical manufacturing needs.
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-secondary/30 transition-all"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-secondary" />
                </div>

                {/* Quote Text */}
                <p className="text-foreground leading-relaxed mb-8 text-lg">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-display font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-secondary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Logos Strip */}
        <AnimatedSection delay={0.5} className="mt-20">
          <div className="text-center mb-10">
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
              Trusted by 200+ companies across Europe
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["Philips", "ASML", "DAF", "Shell", "Heineken", "ING"].map((company) => (
              <div key={company} className="text-xl font-display font-bold text-navy-400">
                {company}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
