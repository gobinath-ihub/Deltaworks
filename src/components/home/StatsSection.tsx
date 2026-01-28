import { motion } from "framer-motion";
import { CounterAnimation } from "@/components/ui/CounterAnimation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: 30, suffix: "+", label: "Years of Excellence", description: "Serving European industry since 1995" },
  { value: 500, suffix: "+", label: "Projects Completed", description: "Across automotive, aerospace & medical" },
  { value: 15000, suffix: "", label: "Units Monthly", description: "Production capacity at peak" },
  { value: 98, suffix: "%", label: "On-Time Delivery", description: "Reliable supply chain performance" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 industrial-grid opacity-10" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-secondary blur-3xl"
      />

      <div className="container-wide relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary mb-3">
                  <CounterAnimation end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-semibold text-primary-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-navy-300 text-sm">
                  {stat.description}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
