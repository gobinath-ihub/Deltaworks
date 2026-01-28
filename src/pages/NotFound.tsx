import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-10" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-secondary blur-3xl"
      />

      <div className="container-wide relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl md:text-9xl lg:text-[12rem] font-display font-bold text-gradient mb-8">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-navy-200 mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-copper-500">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
