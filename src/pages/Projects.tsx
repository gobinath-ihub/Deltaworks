import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const categories = ["All", "Automotive", "Aerospace", "Medical", "Electronics", "Industrial"];

const projects = [
  {
    id: 1,
    title: "Automotive Powertrain Components",
    category: "Automotive",
    client: "Major European OEM",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    description: "High-precision engine components including connecting rods, camshafts, and valve assemblies for a leading European automotive manufacturer.",
    specs: ["±0.005mm tolerance", "100,000+ units/year", "IATF 16949 certified"],
  },
  {
    id: 2,
    title: "Aerospace Landing Gear Assembly",
    category: "Aerospace",
    client: "Airbus Tier 1 Supplier",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    description: "Critical safety components for commercial aircraft landing gear systems, manufactured to AS9100 aerospace standards with full traceability.",
    specs: ["AS9100 certified", "Titanium & Inconel", "Full NDT testing"],
  },
  {
    id: 3,
    title: "Medical Device Housings",
    category: "Medical",
    client: "Global Medical Devices Company",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    description: "Cleanroom-manufactured aluminum and stainless steel enclosures for Class II and Class III medical diagnostic equipment.",
    specs: ["ISO 13485 certified", "Cleanroom assembly", "FDA compliant"],
  },
  {
    id: 4,
    title: "Semiconductor Equipment Parts",
    category: "Electronics",
    client: "ASML Partner",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-precision aluminum and ceramic components for chip manufacturing systems, requiring sub-micron tolerances and exceptional surface finish.",
    specs: ["<0.001mm precision", "Ra 0.2 surface finish", "Ultra-clean packaging"],
  },
  {
    id: 5,
    title: "Industrial Robotics Arms",
    category: "Industrial",
    client: "Dutch Robotics Startup",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    description: "Complete manufacturing and assembly of lightweight aluminum robot arm segments with integrated cable routing and sensor mounting.",
    specs: ["Complete assembly", "Integrated testing", "Rapid prototyping"],
  },
  {
    id: 6,
    title: "Electric Vehicle Battery Housings",
    category: "Automotive",
    client: "EV Manufacturer",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    description: "Precision-machined aluminum battery enclosures with integrated thermal management channels for next-generation electric vehicles.",
    specs: ["Thermal simulation", "Leak testing", "Lightweight design"],
  },
  {
    id: 7,
    title: "Satellite Communication Components",
    category: "Aerospace",
    client: "Space Technology Company",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    description: "High-frequency waveguide components and antenna assemblies for satellite communication systems with stringent weight and performance requirements.",
    specs: ["Space-qualified", "Aluminum & Titanium", "Full environmental testing"],
  },
  {
    id: 8,
    title: "Surgical Instrument Sets",
    category: "Medical",
    client: "Orthopedic Devices Manufacturer",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80",
    description: "Complete surgical instrument sets for orthopedic procedures, including custom cases and sterile packaging.",
    specs: ["Surgical grade steel", "Laser marking", "Sterile packaging"],
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
              className="inline-block px-4 py-1.5 rounded-full bg-navy-700 text-copper-300 text-sm font-medium mb-6"
            >
              Our Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              Excellence in Every{" "}
              <span className="text-gradient">Detail</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-navy-200 leading-relaxed"
            >
              Explore our portfolio of precision manufacturing projects across automotive, 
              aerospace, medical, and electronics industries.
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
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                    activeCategory === category
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Arrow */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        <ArrowUpRight className="w-5 h-5 text-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
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
              className="relative bg-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
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
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Have a similar project in mind?
              </h2>
              <p className="text-muted-foreground text-lg">
                Let's discuss how DeltaWorks can bring your vision to life.
              </p>
            </div>
            <Button asChild size="lg" className="bg-secondary hover:bg-copper-500">
              <Link to="/contact" className="flex items-center gap-2">
                Get a Quote
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
