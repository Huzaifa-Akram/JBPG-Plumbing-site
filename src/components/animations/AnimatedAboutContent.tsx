"use client";

import { motion } from "framer-motion";
import styles from "../AboutUs.module.css";

interface AnimatedAboutContentProps {
  title: string;
  mainParagraph: string;
  secondaryParagraph: string;
}

const AnimatedAboutContent = ({
  title,
  mainParagraph,
  secondaryParagraph,
}: AnimatedAboutContentProps) => {
  return (
    <motion.div
      className={styles.textContent}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className={styles.mainParagraph}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {mainParagraph}
      </motion.p>

      <motion.p
        className={styles.secondaryParagraph}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {secondaryParagraph}
      </motion.p>

      <motion.div
        className={styles.servicesContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className={styles.serviceColumn}>
          <h3 className={styles.serviceTitle}>Emergency 24/7 Service</h3>
          <ul className={styles.serviceList}>
            <li className={styles.serviceItem}>Local Plumber</li>
            <li className={styles.serviceItem}>Guaranteed</li>
            <li className={styles.serviceItem}>Fully Insured</li>
            <li className={styles.serviceItem}>Onsite in 1 hour</li>
          </ul>

          <div className={styles.serviceValues}>
            <h4>Friendly & Helpful</h4>
            <h4>Fast Reacting & Skilled</h4>
          </div>
        </div>

        <div className={styles.serviceColumn}>
          <h3 className={styles.serviceTitle}>Appointment Service</h3>
          <ul className={styles.serviceList}>
            <li className={styles.serviceItem}>Taps, Toilet, Gas</li>
            <li className={styles.serviceItem}>Boiler Installs</li>
            <li className={styles.serviceItem}>All Plumbing</li>
            <li className={styles.serviceItem}>Gas Safe</li>
          </ul>

          <div className={styles.serviceValues}>
            <h4>Reliable & Trustworthy</h4>
            <h4>Fixed Quote & Services</h4>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="/services"
          className={styles.ctaButton}
          aria-label="Read more about our services"
        >
          Read More
          <span className={styles.arrowIcon}>→</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedAboutContent;
