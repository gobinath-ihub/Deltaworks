import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-0 lg:right-0 lg:max-w-7xl lg:mx-auto z-50 transition-all duration-500 rounded-full border ${isScrolled
          ? "bg-navy-950/90 backdrop-blur-md shadow-2xl py-3 border-white/10"
          : "bg-navy-900/60 backdrop-blur-sm shadow-lg py-4 border-white/5"
          }`}
      >
        <div className="px-6 md:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/deltaworks-logo.png"
                alt="DeltaWorks Manufacturing BV"
                className="h-12 w-auto object-contain bg-white/90 rounded-lg p-1 group-hover:bg-white transition-colors"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-white tracking-tight">DeltaWorks</span>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-secondary leading-none mt-1">Manufacturing BV</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-8 mx-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative font-medium text-sm transition-colors animated-underline ${location.pathname === link.href
                    ? "text-secondary"
                    : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block shrink-0">
              <Button
                asChild
                className="bg-secondary hover:bg-copper-500 text-secondary-foreground shadow-lg hover:shadow-xl transition-all rounded-full px-6"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Quote
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-24 left-4 right-4 bg-navy-900 border border-white/10 rounded-2xl shadow-2xl p-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`block py-3 px-4 rounded-xl font-medium transition-colors ${location.pathname === link.href
                        ? "bg-secondary/10 text-secondary"
                        : "text-white/90 hover:bg-white/5"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4 border-t border-white/10"
                >
                  <Button asChild className="w-full bg-secondary hover:bg-copper-500 rounded-xl">
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
