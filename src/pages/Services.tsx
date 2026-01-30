import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cog,
  Truck,
  Shield,
  Wrench,
  BarChart3,
  Layers,
  CheckCircle,
  ArrowUpRight
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
const services = [
  {
    id: "pcb-assembly",
    icon: Cog,
    title: "PCB Assembly Services",
    subtitle: "SMT & Through-Hole",
    description: "High-speed SMT assembly lines capable of placing 01005 components, valid for complex rigid, flex, and rigid-flex Printed Circuit Boards.",
    features: [
      "01005 & micro-BGA placement",
      "Package-on-Package (PoP)",
      "Automated Optical Inspection (AOI)",
      "Conformal coating & potting",
    ],
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "component-sourcing",
    icon: Truck,
    title: "Component Procurement",
    subtitle: "Global Supply Chain",
    description: "Extensive network of verified distributors ensures genuine components, BOM scrub services, and proactive obsolescence management.",
    features: [
      "BOM analysis & scrubbing",
      "Counterfeit detection",
      "Alternative part sourcing",
      "Just-in-Time materials logistics",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "testing-certification",
    icon: Shield,
    title: "Testing & Certification",
    subtitle: "Quality Assurance",
    description: "Rigorous testing protocols ensuring zero defects for mission-critical applications in automotive, medical, and aerospace sectors.",
    features: [
      "In-Circuit Testing (ICT)",
      "Flying Probe Testing",
      "Functional Verification",
      "Environmental Stress Screening",
    ],
    image: "/testing-certification.png",
  },
  {
    id: "hardware-engineering",
    icon: Wrench,
    title: "Hardware Engineering",
    subtitle: "Design & Development",
    description: "Collaborative DFM/DFT support to optimize your PCB layout for manufacturability, reducing costs and improved yield rates.",
    features: [
      "Design for Assembly (DFA)",
      "Design for Test (DFT)",
      "PCB Layout Optimization",
      "Rapid Prototyping Services",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "box-build",
    icon: Layers,
    title: "Box Build & Integration",
    subtitle: "System Assembly",
    description: "Complete turnkey product assembly including firmware flashing, cable harnessing, enclosure mounting, and final packaging.",
    features: [
      "Wire Harness Fabrication",
      "Firmware Flashing & Config",
      "Electromechanical Assembly",
      "Consumer-ready Packaging",
    ],
    image: "/box-build.png",
  },
  {
    id: "aftermarket",
    icon: BarChart3,
    title: "Aftermarket Services",
    subtitle: "Lifecycle Support",
    description: "Continuing support beyond manufacturing with repair, refurbishment, and warranty management services for your electronic products.",
    features: [
      "Diagnostic & Repair",
      "Refurbishment Programs",
      "Warranty Fulfillment",
      "Root Cause Analysis",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
];

const capabilities = [
  { label: "Materials", items: ["FR4 Standard/High TG", "Rogers/Teflon", "Polyimide (Flex)", "Aluminum Core", "Ceramic Substrates"] },
  { label: "Industries", items: ["Computing & Server", "Telecom & 5G", "Medical Electronics", "Automotive EV", "Industrial IoT"] },
  { label: "Certifications", items: ["ISO 9001:2015", "IPC-A-610 Class 2/3", "ISO 13485", "IATF 16949", "ANSI/ESD S20.20"] },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-secondary blur-3xl"
        />

        <div className="container-wide relative">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-navy-700 text-navy-200 text-sm font-medium mb-6"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              <span className="text-navy-300">Advanced</span> Electronics{" "}
              Manufacturing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-navy-200 leading-relaxed"
            >
              From prototype development to mass production, we deliver high-reliability
              electronic assemblies and computer hardware with uncompromised quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-secondary" />
                      </div>
                      <div>
                        <span className="text-primary font-medium text-sm">
                          {service.subtitle}
                        </span>
                        <h2 className="text-3xl font-display font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="bg-secondary hover:bg-copper-500">
                      <Link to="/contact" className="flex items-center gap-2">
                        Request a Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="relative rounded-lg overflow-hidden shadow-lg border border-border/60"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Capabilities
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                What We Work With
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Our extensive capabilities span materials, industries, and certifications.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((category, index) => (
              <AnimatedSection key={category.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="p-8 bg-primary rounded-xl border border-primary/50 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                >
                  {/* Decor */}
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-secondary blur-2xl" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-6 relative z-10">
                    {category.label}
                  </h3>
                  <ul className="space-y-3 relative z-10">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/90 group-hover:text-white transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_hsl(var(--secondary))]" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-secondary blur-3xl"
        />

        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
                Take Your Production to the Next Level
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xl text-navy-200 mb-10 max-w-2xl mx-auto">
                Partner with DeltaWorks to access world-class manufacturing capabilities and engineering expertise.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-copper-500">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get a Quote
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300">
                  <Link to="/projects">View Our Projects</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
