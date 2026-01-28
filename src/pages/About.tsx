import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Award, Users } from "lucide-react";
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

const timeline = [
  { year: "1995", title: "Founded in Amsterdam", description: "Started as a small precision machining workshop with 3 employees." },
  { year: "2002", title: "ISO 9001 Certification", description: "Achieved our first quality management certification, opening doors to new industries." },
  { year: "2008", title: "Facility Expansion", description: "Moved to our current 15,000m² facility in the Amsterdam industrial zone." },
  { year: "2015", title: "Industry 4.0 Integration", description: "Fully digitized operations with smart manufacturing capabilities." },
  { year: "2020", title: "Aerospace Certification", description: "Achieved AS9100 certification for aerospace manufacturing." },
  { year: "2024", title: "Sustainability Leader", description: "Carbon-neutral operations and sustainable manufacturing practices." },
];

const team = [
  {
    name: "Jan de Vries",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Anna Bakker",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Thomas Jansen",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Lisa Smit",
    role: "Quality Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
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
              className="inline-block px-4 py-1.5 rounded-full bg-navy-700 text-copper-300 text-sm font-medium mb-6"
            >
              About DeltaWorks
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              30 Years of Dutch{" "}
              <span className="text-gradient">Engineering Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-navy-200 leading-relaxed"
            >
              From our roots as a small workshop to becoming one of Europe's trusted 
              manufacturing partners, DeltaWorks has always been driven by precision, 
              innovation, and a commitment to excellence.
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
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                  alt="DeltaWorks facility"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-display font-bold">
                    <CounterAnimation end={30} suffix="+" />
                  </div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Built on a Foundation of Precision
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  DeltaWorks Manufacturing BV was founded in 1995 by Jan de Vries, 
                  a mechanical engineer with a vision to bring world-class precision 
                  manufacturing to the Netherlands.
                </p>
                <p>
                  What started as a three-person workshop has grown into a 15,000m² 
                  state-of-the-art facility employing over 200 skilled professionals. 
                  Throughout this journey, our commitment to quality and customer 
                  satisfaction has remained unwavering.
                </p>
                <p>
                  Today, we serve leading companies across automotive, aerospace, medical, 
                  and semiconductor industries, delivering precision components and 
                  assemblies that meet the highest standards.
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
                className="h-full p-10 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-secondary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional manufacturing solutions that exceed client expectations, 
                  combining Dutch engineering precision with innovative technologies to drive 
                  industrial progress.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full p-10 bg-primary rounded-2xl shadow-lg hover:shadow-xl transition-all"
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Our Values
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                The Principles That Guide Us
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Our Journey
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Three Decades of Growth
              </h2>
            </AnimatedSection>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <AnimatedSection
                key={item.year}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background md:-translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}>
                    <span className="text-secondary font-display font-bold text-xl">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-display font-bold text-foreground mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Leadership Team
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Meet the People Behind DeltaWorks
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Our experienced leadership team brings decades of manufacturing expertise.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative rounded-2xl overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium text-sm">
                    {member.role}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to work with us?
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
