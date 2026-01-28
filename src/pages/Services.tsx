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
    id: "precision-manufacturing",
    icon: Cog,
    title: "Precision Manufacturing",
    subtitle: "CNC Machining & Fabrication",
    description: "State-of-the-art CNC machining and fabrication with tolerances up to ±0.01mm for the most demanding applications across automotive, aerospace, and medical industries.",
    features: [
      "5-axis CNC machining centers",
      "Multi-spindle turning operations",
      "Wire EDM and laser cutting",
      "Surface grinding and finishing",
    ],
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "supply-chain",
    icon: Truck,
    title: "Supply Chain Solutions",
    subtitle: "End-to-End Logistics",
    description: "Comprehensive supply chain management with just-in-time delivery, vendor management, and inventory optimization across Europe and beyond.",
    features: [
      "Just-in-time delivery scheduling",
      "Kanban inventory management",
      "Multi-tier supplier coordination",
      "Real-time tracking and visibility",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "quality-assurance",
    icon: Shield,
    title: "Quality Assurance",
    subtitle: "ISO Certified Processes",
    description: "ISO 9001:2015 and AS9100 certified quality processes with advanced metrology lab and full traceability from raw material to finished product.",
    features: [
      "CMM inspection capabilities",
      "First article inspection (FAI)",
      "Statistical process control",
      "Complete documentation traceability",
    ],
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "custom-engineering",
    icon: Wrench,
    title: "Custom Engineering",
    subtitle: "Design & Development",
    description: "From concept to production, our engineering team delivers tailored solutions with CAD/CAM design, rapid prototyping, and DFM optimization.",
    features: [
      "3D CAD/CAM design services",
      "Rapid prototyping (SLA, SLS, FDM)",
      "Design for manufacturability",
      "Reverse engineering capabilities",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "process-optimization",
    icon: BarChart3,
    title: "Process Optimization",
    subtitle: "Industry 4.0 Solutions",
    description: "Data-driven manufacturing optimization using Industry 4.0 technologies to reduce costs, improve efficiency, and enhance quality.",
    features: [
      "Real-time production monitoring",
      "Predictive maintenance systems",
      "Lean manufacturing implementation",
      "Digital twin technology",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "assembly-integration",
    icon: Layers,
    title: "Assembly & Integration",
    subtitle: "Complete Product Solutions",
    description: "Full product assembly with electrical and mechanical integration, testing, and packaging for ready-to-ship finished goods.",
    features: [
      "Mechanical sub-assembly",
      "Electrical integration & wiring",
      "Functional testing & validation",
      "Custom packaging solutions",
    ],
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
  },
];

const capabilities = [
  { label: "Materials", items: ["Aluminum", "Stainless Steel", "Titanium", "Plastics", "Composites"] },
  { label: "Industries", items: ["Automotive", "Aerospace", "Medical", "Semiconductor", "Energy"] },
  { label: "Certifications", items: ["ISO 9001:2015", "AS9100D", "ISO 13485", "IATF 16949", "NADCAP"] },
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
              className="inline-block px-4 py-1.5 rounded-full bg-navy-700 text-copper-300 text-sm font-medium mb-6"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              Comprehensive Manufacturing{" "}
              <span className="text-gradient">Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-navy-200 leading-relaxed"
            >
              From precision components to complete assemblies, we deliver excellence 
              at every stage of the manufacturing process with cutting-edge technology 
              and Dutch engineering expertise.
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
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-secondary" />
                      </div>
                      <div>
                        <span className="text-secondary font-medium text-sm">
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
                      className="relative rounded-2xl overflow-hidden shadow-xl"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
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
                <div className="p-8 bg-card rounded-2xl border border-border">
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium hover:bg-secondary/10 hover:text-secondary transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
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
                Ready to Start Your Project?
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xl text-navy-200 mb-10 max-w-2xl mx-auto">
                Let's discuss your manufacturing requirements and how DeltaWorks can help.
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
                <Button asChild size="lg" variant="outline" className="border-navy-400 text-primary-foreground hover:bg-navy-700/50">
                  <Link to="/projects">View Our Work</Link>
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
