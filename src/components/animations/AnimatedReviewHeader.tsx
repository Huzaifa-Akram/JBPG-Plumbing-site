"use client";

import { motion } from "framer-motion";
import styles from "../Reviews.module.css";
import Image from "next/image";

interface AnimatedReviewHeaderProps {
  logoSrc: string;
  viewAllLink: string;
}

const AnimatedReviewHeader = ({
  logoSrc,
  viewAllLink,
}: AnimatedReviewHeaderProps) => {
  return (
    <>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.line}></span>
        Reviews
        <span className={styles.line}></span>
      </motion.h2>

      <motion.div
        className={styles.checkatradeHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src={logoSrc}
          alt="Checkatrade Logo"
          width={200}
          height={50}
          className={styles.checkatradeLogo}
        />
        <a href={viewAllLink} className={styles.viewAllLink}>
          View All
        </a>
      </motion.div>
    </>
  );
};

export default AnimatedReviewHeader;
