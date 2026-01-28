import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Automotive Powertrain Components",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    description: "Precision-machined engine components for a leading European automaker.",
  },
  {
    title: "Aerospace Landing Gear Assembly",
    category: "Aerospace",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    description: "Critical safety components meeting AS9100 aerospace standards.",
  },
  {
    title: "Medical Device Housings",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    description: "Cleanroom-manufactured enclosures for diagnostic equipment.",
  },
  {
    title: "Semiconductor Equipment Parts",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-precision components for chip manufacturing systems.",
  },
];

export const ProjectsPreview = () => {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Featured Projects
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Excellence in Every <span className="text-gradient">Detail</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Discover how we've helped industry leaders achieve their manufacturing goals.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.3}>
            <Button asChild variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Link
                to="/projects"
                className="group block relative rounded-2xl overflow-hidden bg-card"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-primary-foreground mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-navy-200 text-sm lg:text-base opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
