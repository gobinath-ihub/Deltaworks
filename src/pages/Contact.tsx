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
              Let's Build Something{" "}
              <span className="text-gradient">Great Together</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-navy-200 leading-relaxed"
            >
              Ready to discuss your manufacturing needs? Our team is here to help 
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
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Map */}
              <AnimatedSection delay={0.4} className="mt-10">
                <div className="rounded-2xl overflow-hidden h-64 bg-muted">
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
                <div className="bg-card rounded-2xl border border-border p-8 lg:p-10 shadow-sm">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                    Request a Quote
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          placeholder="John"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          placeholder="Doe"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+31 20 123 4567"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company BV"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select
                        id="service"
                        className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service...</option>
                        <option value="precision">Precision Manufacturing</option>
                        <option value="supply-chain">Supply Chain Solutions</option>
                        <option value="quality">Quality Assurance</option>
                        <option value="engineering">Custom Engineering</option>
                        <option value="optimization">Process Optimization</option>
                        <option value="assembly">Assembly & Integration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us about your project requirements, quantities, materials, and timeline..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-secondary hover:bg-copper-500 h-12"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-secondary-foreground border-t-transparent rounded-full"
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
                </div>
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
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">{faq.a}</p>
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
