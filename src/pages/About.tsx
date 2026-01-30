import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Award, Users, Globe, Leaf, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CounterAnimation } from "@/components/ui/CounterAnimation";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every component we manufacture meets exacting standards with tolerances as tight as ±0.01mm.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We continuously invest in cutting-edge technology to stay at the forefront of manufacturing excellence.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "ISO 9001:2015 certified processes ensure consistent, reliable results across every project.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We believe in building lasting relationships, working closely with clients to achieve their goals.",
  },
];


const About = () => {
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
              About DeltaWorks
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              30 Years of <span className="text-navy-300">Electronics</span>{" "}
              Manufacturing Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-navy-200 leading-relaxed"
            >
              From our roots as a specialized engineering firm to becoming one of Europe's premier
              electronics manufacturing partners, DeltaWorks is driven by innovation,
              quality, and technical precision.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Electronics Laboratory"
                  className="rounded-lg shadow-lg border border-border/60"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-display font-bold">
                    <CounterAnimation end={30} suffix="+" />
                  </div>
                  <div className="text-sm">Years of Innovation</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Built on a Foundation of Technology
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  DeltaWorks Manufacturing BV was founded in 1995 with a vision to bring advanced
                  electronics manufacturing capabilities to the European market.
                </p>
                <p>
                  Starting with a single SMT line, we have grown into a fully integrated
                  Electronic Manufacturing Services (EMS) provider. Our facility now boasts
                  cutting-edge clean rooms, automated assembly lines, and advanced testing labs.
                </p>
                <p>
                  Today, we partner with industry leaders in computing, medical, and telecom sectors
                  to build the hardware that powers the modern world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full p-10 bg-card rounded-lg border border-border/60 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower global innovation by delivering superior electronic manufacturing solutions,
                  characterized by zero-defect quality and technical adaptability.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full p-10 bg-primary rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">Our Vision</h3>
                <p className="text-navy-200 leading-relaxed">
                  To be Europe's most trusted manufacturing partner, recognized for our
                  unwavering quality, technological leadership, and sustainable practices
                  that shape the future of industry.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Values
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                <span className="text-primary">The</span> Principles That Guide Us
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="text-center p-8 bg-primary rounded-xl border border-primary/50 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                >
                  {/* Decor */}
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-secondary blur-2xl" />
                  </div>

                  <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-6 relative z-10">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 relative z-10">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed relative z-10">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-20" />

        <div className="container-wide relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Why Partner With Us
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                <span className="text-primary">Strategic</span> Manufacturing Advantages
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global logistics Network",
                description: "Our integrated supply chain ensures seamless material sourcing and product delivery to 50+ countries worldwide.",
                stat: "50+ Countries"
              },
              {
                icon: ShieldCheck,
                title: "Certified Reliability",
                description: "With AS9100 and ISO 13485 certifications, we guarantee aerospace and medical-grade quality for every component.",
                stat: "99.9% Quality Rate"
              },
              {
                icon: Leaf,
                title: "Sustainable Operations",
                description: "We are committed to carbon-neutral manufacturing by 2030, utilizing renewable energy and closed-loop recycling.",
                stat: "100% Green Energy"
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-primary p-8 rounded-xl border border-primary/50 shadow-xl hover:shadow-2xl relative overflow-hidden group h-full flex flex-col items-start"
                >
                  {/* Decor */}
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-secondary blur-2xl" />
                  </div>

                  <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300 relative z-10">
                    <item.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">
                    {item.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed mb-8 flex-grow relative z-10">
                    {item.description}
                  </p>

                  <div className="w-full pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                    <span className="text-sm font-medium text-white/60">Key Metric</span>
                    <span className="text-lg font-bold text-secondary">{item.stat}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Col - Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Global Reach
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  <span className="text-primary">Connecting</span> Continents with Precision
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-lg text-muted-foreground mb-8">
                  From our headquarters in the Netherlands, DeltaWorks serves a diverse portfolio of clients across the globe. Our logistical expertise ensures your components arrive on time, anywhere in the world.
                </p>
              </AnimatedSection>

              <div className="space-y-6">
                {[
                  { title: "North America", desc: "Serving clients in USA & Canada with express logistics." },
                  { title: "Europe", desc: "Centralized hub for rapid distribution across the EU." },
                  { title: "Asia-Pacific", desc: "Strategic partnerships facilitating smooth Asian operations." }
                ].map((region, i) => (
                  <AnimatedSection key={region.title} delay={0.3 + (i * 0.1)}>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-primary border border-primary/50 hover:border-secondary/40 transition-colors duration-300 relative overflow-hidden group">
                      {/* Decor */}
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <div className="w-8 h-8 rounded-full bg-secondary blur-xl" />
                      </div>

                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 shadow-sm relative z-10">
                        <Globe className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white">{region.title}</h3>
                        <p className="text-white/70 text-sm">{region.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Right Col - Visual/Image */}
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-2xl group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
                  alt="Global Logistics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-background/95 backdrop-blur-sm p-6 rounded-xl border border-secondary/20 z-20 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-secondary/20">
                      50+
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">Countries Served</div>
                      <div className="text-sm text-muted-foreground">Seamless international supply chain</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

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

export default About;
