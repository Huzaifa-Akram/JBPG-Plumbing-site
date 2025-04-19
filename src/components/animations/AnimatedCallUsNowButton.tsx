"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AnimatedCallUsNowButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedCallUsNowButton: React.FC<AnimatedCallUsNowButtonProps> = ({
  className,
  children = "Call Us Now",
}) => {
  // Create revolving glow effect
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Animate rotation over time
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Outer revolving glow effect */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from ${rotation}deg, rgba(98, 196, 111, 0.8) 0deg, rgba(98, 196, 111, 0) 60deg, rgba(98, 196, 111, 0) 300deg, rgba(98, 196, 111, 0.8) 360deg)`,
          padding: "8px",
          filter: "blur(4px)",
          transform: "scale(1.1)",
          opacity: 0.8,
        }}
      />

      {/* Inner pulsing glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: "rgba(98, 196, 111, 0.5)" }}
        animate={{
          boxShadow: [
            "0 0 15px 2px rgba(98, 196, 111, 0.4)",
            "0 0 20px 8px rgba(98, 196, 111, 0.6)",
            "0 0 15px 2px rgba(98, 196, 111, 0.4)",
          ],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Button itself */}
      <motion.button
        className={`relative bg-[#62c46f] text-white font-medium rounded-full transition-colors hover:bg-[#4ea75a] ${className}`}
        whileTap={{ scale: 0.95 }}
        style={{
          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
          boxShadow:
            "0 4px 10px rgba(98, 196, 111, 0.3), 0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        {children}
      </motion.button>
    </motion.div>
  );
};

export default AnimatedCallUsNowButton;
