"use client";

import { motion } from "framer-motion";
import styles from "../Hero.module.css";
import Image from "next/image";

interface AnimatedHeroImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const AnimatedHeroImage = ({
  src,
  alt,
  width,
  height,
}: AnimatedHeroImageProps) => {
  return (
    <motion.div
      className={styles.heroImage}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image src={src} alt={alt} width={width} height={height} priority />
    </motion.div>
  );
};

export default AnimatedHeroImage;
