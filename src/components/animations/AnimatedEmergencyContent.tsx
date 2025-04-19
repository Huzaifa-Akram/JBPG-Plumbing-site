"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../EmergencyCallSection.module.css";

interface AnimatedEmergencyContentProps {
  title: string;
  description: string;
  buttonText: string;
  phoneNumber: string;
}

const AnimatedEmergencyContent = ({
  title,
  description,
  buttonText,
  phoneNumber,
}: AnimatedEmergencyContentProps) => {
  return (
    <motion.div
      className={styles.emergencyCallContent}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className={styles.emergencyTitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className={styles.emergencyDescription}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {description}
      </motion.p>

      <motion.a
        href={`tel:${phoneNumber}`}
        className={styles.emergencyButton}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{buttonText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default AnimatedEmergencyContent;
