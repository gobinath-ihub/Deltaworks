import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const getVariants = (direction: string): Variants => {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  const initial = directions[direction as keyof typeof directions] || directions.up;

  return {
    hidden: {
      opacity: 0,
      ...initial,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={getVariants(direction)}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier for premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
