import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "High-Performance Server Blades",
    category: "Computing",
    image: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?auto=format&fit=crop&w=800&q=80",
    description: "Multi-socket server motherboards for enterprise data centers.",
  },
  {
    title: "Automotive ECU Controllers",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?auto=format&fit=crop&w=800&q=80",
    description: "Safety-critical engine control units with IPC Class 3 compliance.",
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Featured Projects
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                <span className="text-navy-300">Excellence</span> in Every Detail
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
                className="group block relative rounded-lg overflow-hidden bg-card border border-border/60 shadow-md card-glow"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-primary-foreground mb-2 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-navy-200 text-sm lg:text-base opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    {project.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
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
