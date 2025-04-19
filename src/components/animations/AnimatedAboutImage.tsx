"use client";

import { motion } from "framer-motion";
import styles from "../AboutUs.module.css";
import Image from "next/image";

interface AnimatedAboutImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const AnimatedAboutImage = ({
  src,
  alt,
  width,
  height,
}: AnimatedAboutImageProps) => {
  return (
    <motion.div
      className={styles.imageGallery}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className={styles.mainImageWrapper}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.mainImage}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedAboutImage;
