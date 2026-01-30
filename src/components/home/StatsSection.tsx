import { motion } from "framer-motion";
import { CounterAnimation } from "@/components/ui/CounterAnimation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: 30, suffix: "+", label: "Years of Excellence", description: "Precision electronics since 1995" },
  { value: 1000, suffix: "+", label: "Enterprise Projects", description: "High-complexity PCB systems" },
  { value: 500, suffix: "k+", label: "Components Monthly", description: "High-speed SMT lines" },
  { value: 99.8, suffix: "%", label: "Delivery Reliability", description: "JIT supply chain performance" },
];

export const StatsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-navy-900 border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 industrial-grid opacity-10" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-secondary blur-3xl"
      />

      <div className="container-wide relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="text-center p-6 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-secondary mb-4">
                  <CounterAnimation end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-semibold text-white/90 mb-3 tracking-wide">
                  {stat.label}
                </div>
                <div className="text-navy-300 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {stat.description}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
