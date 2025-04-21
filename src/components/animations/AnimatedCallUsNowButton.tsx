"use client";

import { motion } from "framer-motion";
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
    // Even slower rotation
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360); // Very slow rotation
    }, 40); // Slower interval

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }} // Minimal hover effect
      transition={{ type: "spring", stiffness: 250, damping: 20 }} // More damping for less bounce
    >
      {/* Outer revolving glow effect - barely visible */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from ${rotation}deg, rgba(98, 196, 111, 0.15) 0deg, rgba(98, 196, 111, 0) 60deg, rgba(98, 196, 111, 0) 300deg, rgba(98, 196, 111, 0.15) 360deg)`,
          padding: "2px", // Minimal padding
          filter: "blur(1px)", // Minimal blur
          transform: "scale(1.01)", // Barely scaled
          opacity: 0.15, // Very low opacity
        }}
      />

      {/* Inner pulsing glow - almost imperceptible */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: "rgba(98, 196, 111, 0.1)" }} // Very transparent
        animate={{
          boxShadow: [
            "0 0 3px 0px rgba(98, 196, 111, 0.1)", // Minimal shadow
            "0 0 5px 1px rgba(98, 196, 111, 0.15)", // Slight glow
            "0 0 3px 0px rgba(98, 196, 111, 0.1)", // Back to minimal
          ],
          scale: [1, 1.005, 1], // Barely perceptible scale change
        }}
        transition={{
          duration: 5, // Very slow animation
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
