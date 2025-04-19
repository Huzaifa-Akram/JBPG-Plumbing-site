"use client";

import { motion } from "framer-motion";
import styles from "../Reviews.module.css";
import Image from "next/image";

interface AnimatedReviewCardProps {
  name: string;
  location: string;
  text: string;
  iconSrc: string;
  direction: "left" | "right";
  delay: number;
}

const AnimatedReviewCard = ({
  name,
  location,
  text,
  iconSrc,
  direction,
  delay,
}: AnimatedReviewCardProps) => {
  return (
    <motion.div
      className={styles.reviewCard}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className={styles.reviewLeft}>
        <Image
          src={iconSrc}
          alt="Checkatrade verified"
          width={60}
          height={60}
          className={styles.checkatradeIcon}
        />
        <div className={styles.reviewAuthor}>
          <p className={styles.authorName}>{name}</p>
          <p className={styles.authorLocation}>{location}</p>
        </div>
      </div>
      <div className={styles.reviewContent}>
        <p className={styles.reviewText}>{text}</p>
      </div>
    </motion.div>
  );
};

export default AnimatedReviewCard;
