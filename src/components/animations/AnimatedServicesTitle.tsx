"use client";

import { motion } from "framer-motion";
import styles from "../Services.module.css";

interface AnimatedServicesTitleProps {
  title: string;
}

const AnimatedServicesTitle = ({ title }: AnimatedServicesTitleProps) => {
  return (
    <motion.h2
      className={styles.sectionTitle}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <span className={styles.line}></span>
      {title}
      <span className={styles.line}></span>
    </motion.h2>
  );
};

export default AnimatedServicesTitle;
