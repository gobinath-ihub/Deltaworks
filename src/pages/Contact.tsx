import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Industrieweg 42\n1099 Amsterdam, Netherlands",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+31 20 123 4567",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@deltaworks.nl",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 8:00 - 17:00\nSat - Sun: Closed",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset after showing success
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              <span className="text-secondary">Let's</span> Build Something{" "}
              Great Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-navy-200 leading-relaxed"
            >
              Ready to discuss your electronics manufacturing project? Our team is here to help
              you bring your vision to life with precision and expertise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                  Get in Touch
                </h2>
              </AnimatedSection>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <AnimatedSection key={item.title} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="flex gap-4 p-4 rounded-xl bg-primary border border-primary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Decor */}
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <div className="w-8 h-8 rounded-full bg-secondary blur-xl" />
                      </div>

                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 relative z-10">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="relative z-10">
                        <h3 className="font-display font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/70 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Map */}
              <AnimatedSection delay={0.4} className="mt-10">
                <div className="rounded-lg overflow-hidden h-64 bg-muted border border-border/60">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.35839366836!2d4.7633036!3d52.3547498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DeltaWorks Location"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="bg-primary rounded-xl border border-primary/50 p-8 lg:p-10 shadow-xl relative overflow-hidden group"
                >
                  {/* Decor */}
                  <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                    <div className="w-32 h-32 rounded-full bg-secondary blur-3xl" />
                  </div>

                  <h2 className="text-2xl font-display font-bold text-white mb-2 relative z-10">
                    Request a Quote
                  </h2>
                  <p className="text-white/70 mb-8 relative z-10">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white/90">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          placeholder="John"
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-secondary focus:ring-secondary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white/90">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          placeholder="Doe"
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-secondary focus:ring-secondary/20"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/90">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-secondary focus:ring-secondary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white/90">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+31 20 123 4567"
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-secondary focus:ring-secondary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white/90">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company BV"
                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-secondary focus:ring-secondary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-white/90">Service Interest</Label>
                      <select
                        id="service"
                        className="w-full h-12 px-4 rounded-md border border-white/10 bg-navy-800 text-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                      >
                        <option value="">Select a service...</option>
                        <option value="pcb-assembly">PCB Assembly</option>
                        <option value="sourcing">Component Sourcing</option>
                        <option value="testing">Testing & QA</option>
                        <option value="embedded">Embedded Design</option>
                        <option value="box-build">Box Build</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white/90">Project Details *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us about your project requirements, quantities, materials, and timeline..."
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-secondary focus:ring-secondary/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-secondary hover:bg-copper-500 h-12 text-white"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : isSubmitted ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                FAQs
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
            </AnimatedSection>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What industries do you serve?",
                a: "We serve automotive, aerospace, medical, semiconductor, and industrial manufacturing sectors with precision components and assemblies.",
              },
              {
                q: "What are your typical lead times?",
                a: "Standard lead times range from 2-4 weeks depending on complexity. We offer expedited services for urgent requirements.",
              },
              {
                q: "Do you offer prototyping services?",
                a: "Yes, we offer rapid prototyping using CNC machining, 3D printing (SLA, SLS, FDM), and other additive technologies.",
              },
              {
                q: "What certifications do you hold?",
                a: "We are ISO 9001:2015, AS9100D (aerospace), ISO 13485 (medical), and IATF 16949 (automotive) certified.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="p-6 bg-primary rounded-xl border border-primary/50 shadow-md relative overflow-hidden group">
                  {/* Decor */}
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full bg-secondary blur-xl" />
                  </div>

                  <h3 className="font-display font-semibold text-white mb-2 relative z-10">
                    {faq.q}
                  </h3>
                  <p className="text-white/70 relative z-10">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
