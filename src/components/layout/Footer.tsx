import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/contact" },
  ],
  services: [
    { label: "Precision Manufacturing", href: "/services" },
    { label: "Supply Chain Solutions", href: "/services" },
    { label: "Quality Assurance", href: "/services" },
    { label: "Custom Engineering", href: "/services" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Request Quote", href: "/contact" },
    { label: "FAQs", href: "/contact" },
    { label: "Technical Support", href: "/contact" },
  ],
};

const contactInfo = [
  { icon: MapPin, text: "Amsterdam, Netherlands" },
  { icon: Phone, text: "+31 20 123 4567" },
  { icon: Mail, text: "info@deltaworks.nl" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-navy-600">
        <div className="container-wide py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Ready to optimize your manufacturing?
              </h2>
              <p className="text-navy-200 text-lg max-w-xl">
                Let's discuss how DeltaWorks can transform your production processes.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-copper-500 text-secondary-foreground shadow-lg hover:shadow-xl transition-all group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-display font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl">DeltaWorks</span>
                <span className="text-xs tracking-wider uppercase text-navy-300">Manufacturing BV</span>
              </div>
            </Link>
            <p className="text-navy-200 mb-6 max-w-sm leading-relaxed">
              Precision engineering and manufacturing excellence since 1995. Delivering innovative 
              solutions for Europe's leading industries.
            </p>
            <div className="flex flex-col gap-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-navy-200 hover:text-secondary transition-colors">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-navy-200 hover:text-secondary transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-navy-200 hover:text-secondary transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-navy-200 hover:text-secondary transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-600">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-300 text-sm">
              © {currentYear} DeltaWorks Manufacturing BV. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-600 hover:bg-secondary flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-600 hover:bg-secondary flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-navy-300">
                <Link to="/contact" className="hover:text-secondary transition-colors">Privacy</Link>
                <Link to="/contact" className="hover:text-secondary transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
