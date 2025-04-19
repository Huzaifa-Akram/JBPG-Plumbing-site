"use client";

import React from "react";
import Image from "next/image";
import styles from "../ServiceCard.module.css";
import { motion } from "framer-motion";

interface AnimatedServiceCardProps {
  title: string;
  icon: string;
  description: string;
  index: number;
}

const AnimatedServiceCard = ({
  title,
  icon,
  description,
  index,
}: AnimatedServiceCardProps) => {
  // Create image filename
  const imageFileName = icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 * index,
      },
    },
  };

  return (
    <motion.div
      className={styles.serviceCard}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.iconContainer}>
        <Image
          src={`/images/${imageFileName}.svg`}
          alt={`${title} icon`}
          width={48}
          height={48}
          className={styles.serviceIcon}
        />
      </div>

      <h3 className={styles.serviceTitle}>{title}</h3>

      <p className={styles.serviceDescription}>
        {description.split(/(\[[^\]]+\])/).map((part, idx) => {
          // Check if this part is a highlighted text marker
          const highlightMatch = part.match(/\[([^\]]+)\]/);

          if (highlightMatch) {
            return (
              <span key={idx} className={styles.highlight}>
                {highlightMatch[1]}
              </span>
            );
          }

          return part;
        })}
      </p>
    </motion.div>
  );
};

export default AnimatedServiceCard;
