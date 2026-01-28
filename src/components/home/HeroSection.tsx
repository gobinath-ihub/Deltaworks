import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Industrial Grid Pattern */}
      <div className="absolute inset-0 industrial-grid opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=2070&q=80"
          alt="Manufacturing facility"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Animated Shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-copper-300 blur-3xl"
      />

      {/* Content */}
      <div className="container-wide relative z-10 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/50 border border-navy-600 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-navy-200 text-sm font-medium">
                Leading Dutch Manufacturing Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              Precision{" "}
              <span className="text-gradient">Engineering</span>{" "}
              for Tomorrow's Industry
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-navy-200 leading-relaxed mb-10 max-w-xl"
            >
              DeltaWorks Manufacturing BV delivers cutting-edge manufacturing solutions 
              with Dutch precision. From concept to completion, we transform ideas into 
              exceptional products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-copper-500 text-secondary-foreground shadow-lg hover:shadow-xl group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy-400 text-primary-foreground hover:bg-navy-700/50 group"
              >
                <Link to="/projects" className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-navy-600"
            >
              {[
                { value: "30+", label: "Years Experience" },
                { value: "500+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl lg:text-3xl font-display font-bold text-secondary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-navy-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1000&q=80"
                  alt="Precision manufacturing"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-8 bottom-8 bg-card rounded-xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">ISO Certified</div>
                    <div className="font-display font-bold text-foreground">9001:2015</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-4 top-8 bg-card rounded-xl p-5 shadow-xl"
              >
                <div className="text-sm text-muted-foreground mb-1">Production Capacity</div>
                <div className="font-display font-bold text-2xl text-foreground">15K+</div>
                <div className="text-xs text-secondary mt-1">Units/Month</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-navy-300"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
