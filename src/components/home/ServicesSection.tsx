import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Cog, Truck, Shield, Wrench, BarChart3, Layers } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Cog,
    title: "PCB Assembly (PCBA)",
    description: "Advanced SMT and THT assembly for complex multi-layer boards with fine-pitch components.",
    features: ["Surface Mount (SMT)", "Through-Hole (THT)", "BGA & QFN Assembly"],
  },
  {
    icon: Truck,
    title: "Global Component Sourcing",
    description: "Strategic procurement of electronic components with verified traceability and obsolescence management.",
    features: ["Trusted Network", "Obsolescence Mgmt", "Cost Optimization"],
  },
  {
    icon: Shield,
    title: "Testing & Validation",
    description: "Comprehensive electronic testing including AOI, X-Ray, ICT, and functional testing protocols.",
    features: ["AOI & X-Ray", "In-Circuit Test", "Functional Test"],
  },
  {
    icon: Wrench,
    title: "Embedded Systems Design",
    description: "Full-cycle electronic engineering support from schematic capture to PCB layout and firmware development.",
    features: ["PCB Layout", "Firmware Dev", "DFM Analysis"],
  },
  {
    icon: Layers,
    title: "Box Build Assembly",
    description: "Complete electromechanical integration, cable harnessing, and enclosure assembly for finished products.",
    features: ["Enclosure Assembly", "Cable Harnessing", "Final Packaging"],
  },
  {
    icon: BarChart3,
    title: "Lifecycle Management",
    description: "Product lifecycle support including repair, refurbishment, and end-of-life management services.",
    features: ["Repair Services", "Refurbishment", "E-Waste Compliance"],
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Services
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              <span className="text-primary">Comprehensive</span> Manufacturing{" "}
              Solutions
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
                className="block h-full p-8 bg-primary rounded-xl border border-primary/50 shadow-xl hover:shadow-2xl relative overflow-hidden group"
              >
                {/* Decor */}
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-secondary blur-2xl" />
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300 relative z-10">
                  <service.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-white mb-3 flex items-center gap-2 relative z-10">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-secondary opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-white/70 leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium"
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
