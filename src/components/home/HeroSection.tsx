import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CounterAnimation } from "@/components/ui/CounterAnimation";

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
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2070&q=80"
          alt="Electronics Manufacturing"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Animated geometric shapes for filling space */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] border-2 border-white/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.05, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] border border-secondary/20"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
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
      <div className="relative z-10 pt-40 pb-32 px-6 sm:px-12 lg:px-20 mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              <span className="text-secondary">Precision</span>{" "}
              Electronics Manufacturing{" "}
              for Advanced Computing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-navy-200 leading-relaxed mb-10 max-w-xl"
            >
              DeltaWorks Manufacturing BV delivers high-performance PCB assembly, embedded systems,
              and computer hardware solutions with European engineering standards.
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
                  Start Your Electronics Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white text-primary hover:bg-white/90 group"
              >
                <Link to="/projects" className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  View Our Portfolio
                </Link>
              </Button>
            </motion.div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-8 border-t border-navy-600/50">
              {[
                { value: 30, suffix: "+", label: "Years Experience" },
                { value: 10, suffix: "M+", label: "Components Delivered" },
                { value: 99.9, suffix: "%", label: "IPC Class 3 Reliability" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
                  className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg group cursor-default overflow-hidden"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 text-center">
                    <div className="text-3xl lg:text-4xl font-display font-bold text-[#D32F2F] mb-2 drop-shadow-sm">
                      <CounterAnimation end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-medium text-navy-200 tracking-wide uppercase opacity-90">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                  src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=1000&q=80"
                  alt="Computer Component Manufacturing"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-8 bottom-8 bg-card rounded-xl p-5 shadow-xl cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">ISO Certified</div>
                    <div className="font-display font-bold text-foreground">13485 & 9001</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-4 top-8 bg-card rounded-xl p-5 shadow-xl cursor-pointer"
              >
                <div className="text-sm text-muted-foreground mb-1">Placement Rate</div>
                <div className="font-display font-bold text-2xl text-foreground">100K+</div>
                <div className="text-xs text-secondary mt-1">CPH (Components/Hour)</div>
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
