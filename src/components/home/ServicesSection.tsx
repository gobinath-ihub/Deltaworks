import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Cog, Truck, Shield, Wrench, BarChart3, Layers } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Cog,
    title: "Precision Manufacturing",
    description: "State-of-the-art CNC machining and fabrication with tolerances up to ±0.01mm for the most demanding applications.",
    features: ["CNC Machining", "Metal Fabrication", "3D Printing"],
  },
  {
    icon: Truck,
    title: "Supply Chain Solutions",
    description: "End-to-end supply chain optimization with just-in-time delivery and inventory management across Europe.",
    features: ["JIT Delivery", "Inventory Management", "Logistics"],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "ISO 9001:2015 certified quality processes with advanced metrology and full traceability.",
    features: ["ISO Certified", "Metrology Lab", "Full Traceability"],
  },
  {
    icon: Wrench,
    title: "Custom Engineering",
    description: "From concept to production, our engineering team delivers tailored solutions for unique challenges.",
    features: ["CAD/CAM Design", "Prototyping", "Tooling"],
  },
  {
    icon: BarChart3,
    title: "Process Optimization",
    description: "Data-driven manufacturing optimization to reduce costs and improve efficiency.",
    features: ["Lean Manufacturing", "Industry 4.0", "Analytics"],
  },
  {
    icon: Layers,
    title: "Assembly & Integration",
    description: "Complete product assembly with electrical and mechanical integration capabilities.",
    features: ["Sub-Assembly", "Testing", "Packaging"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 industrial-grid opacity-30" />
      
      <div className="container-wide relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Our Services
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Comprehensive Manufacturing{" "}
              <span className="text-gradient">Solutions</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From precision components to complete assemblies, we deliver excellence 
              at every stage of the manufacturing process.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group"
            >
              <Link
                to="/services"
                className="block h-full p-8 bg-card rounded-2xl border border-border card-glow"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-secondary transition-colors flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all animated-underline"
          >
            Explore all services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
