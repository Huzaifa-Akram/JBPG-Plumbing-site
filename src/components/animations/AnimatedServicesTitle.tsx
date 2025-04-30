"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedServicesTitleProps {
  children: React.ReactNode;
}

const AnimatedServicesTitle = ({ children }: AnimatedServicesTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedServicesTitle;
