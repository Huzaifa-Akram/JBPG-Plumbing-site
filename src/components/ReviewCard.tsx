// ReviewCard.tsx
import React from "react";
import Image from "next/image";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
  name: string;
  location: string;
  text: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, location, text }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.iconContainer}>
        <Image
          src="/images/checkatrade-icon.svg"
          alt="Checkatrade verified review"
          width={40}
          height={40}
          className={styles.checkatradeIcon}
        />
      </div>

      <div className={styles.reviewContent}>
        <p className={styles.reviewText}>"{text}"</p>
        <div className={styles.reviewAuthor}>
          <p className={styles.authorName}>{name}</p>
          <p className={styles.authorLocation}>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
