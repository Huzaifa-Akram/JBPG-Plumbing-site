"use client";

import { motion } from "framer-motion";
import styles from "../Hero.module.css";
import Image from "next/image";

interface AnimatedHeroContentProps {
  title: string;
  description: string;
  companyName: string;
}

const AnimatedHeroContent = ({
  title,
  description,
  companyName,
}: AnimatedHeroContentProps) => {
  // Extract title parts for animation
  const titleParts = title.split("&");
  const firstPart = titleParts[0] + "&";
  const secondPart = titleParts[1] || "";

  return (
    <div className={styles.heroContent}>
      <motion.div
        className={styles.companyName}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span>
          <span style={{ color: "#29aae3" }}>—</span> {companyName}{" "}
          <span style={{ color: "#29aae3" }}>—</span>
        </span>
      </motion.div>

      <motion.h1
        className={styles.heroTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <span className={styles.professional}>Professional</span> Plumbing
        <br />
        Services <span className={styles.accent}>For Your Home &</span>
        <br />
        <span className={styles.accent}>Business</span>
      </motion.h1>

      <motion.p
        className={styles.heroDescription}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {description}
      </motion.p>

      <motion.div
        className={styles.heroCTA}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <div className={styles.serviceFeatures}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>
              <Image
                src="/icons/clock.svg"
                alt="24/7 Service"
                width={20}
                height={20}
              />
            </span>
            <span className={styles.featureText}>24/7 Services</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>
              <Image
                src="/icons/hammar.svg"
                alt="Licensed Experts"
                width={20}
                height={20}
              />
            </span>
            <span className={styles.featureText}>Licensed Experts</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>
              <Image
                src="/icons/tick.svg"
                alt="Guaranteed Work"
                width={20}
                height={20}
              />
            </span>
            <span className={styles.featureText}>Guaranteed Work</span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="/contact" className={styles.contactButton}>
              Contact Us
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedHeroContent;
