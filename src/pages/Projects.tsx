import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const categories = ["All", "Computing", "Automotive", "Medical", "Industrial", "Telecom"];

const projects = [
  {
    id: 1,
    title: "Enterprise Server Motherboard",
    category: "Computing",
    client: "Global Data Center Provider",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&q=80",
    description: "High-density multi-socket server motherboard designed for AI and cloud computing workloads.",
    specs: ["14-layer PCB", "High-speed Signal Integrity", "IPC Class 3"],
  },
  {
    id: 2,
    title: "Automotive ADAS Controller",
    category: "Automotive",
    client: "European EV Manufacturer",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    description: "Advanced Driver Assistance System (ADAS) control unit with redundant safety features.",
    specs: ["IATF 16949", "AEC-Q100 Components", "Conformal Coating"],
  },

  {
    id: 4,
    title: "5G Base Station Transceiver",
    category: "Telecom",
    client: "Network Infrastructure Co.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "mmWave transceiver module for outdoor 5G small cell deployment.",
    specs: ["Rogers PCB Material", "Thermal Management", "IP67 Enclosure"],
  },
  {
    id: 5,
    title: "Industrial IoT Edge Gateway",
    category: "Industrial",
    client: "Factory Automation Firm",
    image: "/industrial-iot-gateway.png",
    description: "Ruggedized edge computing device for real-time factory data analytics.",
    specs: ["Wide Temp Range", "Vibration Resistant", "Long Lifecycle"],
  },

];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
              Our Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              <span className="text-navy-300">Engineering</span> the Future of{" "}
              Electronics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-navy-200 leading-relaxed"
            >
              A showcase of our capabilities in high-performance electronics manufacturing
              across computing, automotive, medical, and industrial sectors.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Category Filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${activeCategory === category
                    ? "bg-secondary text-secondary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer bg-primary rounded-xl overflow-hidden border border-primary/50 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Arrow */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative">
                      {/* Decor */}
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-secondary blur-2xl" />
                      </div>

                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium mb-3 relative z-10 border border-white/5">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-secondary transition-colors relative z-10">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/70 line-clamp-2 relative z-10">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto border border-border/60"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/90 flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 -mt-16 relative">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-4">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-6">{selectedProject.client}</p>
                <p className="text-foreground leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <Button asChild className="bg-secondary hover:bg-copper-500">
                  <Link to="/contact" className="flex items-center gap-2">
                    Start a Similar Project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                <span className="text-navy-300">Ready</span> to work with us?
              </h2>
              <p className="text-navy-200 text-lg">
                Let's discuss how DeltaWorks can support your manufacturing needs.
              </p>
            </div>
            <Button asChild size="lg" className="bg-secondary hover:bg-copper-500">
              <Link to="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
