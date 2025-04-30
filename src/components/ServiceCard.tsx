// ServiceCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  highlightedText: string[];
  id: number; // Changed from slug to id
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  description,
  id,
}) => {
  // Create image filename by replacing spaces with hyphens and making lowercase
  const imageFileName = icon;

  return (
    <Link href={`/services/service${id}`} className={styles.serviceCardLink}>
      <div className={styles.serviceCard}>
        <div className={styles.iconContainer}>
          <Image
            src={`/images/${imageFileName}.svg`}
            alt={`${title} icon`}
            width={64}
            height={64}
            className={styles.serviceIcon}
            loading="lazy"
          />
        </div>

        <h3 className={styles.serviceTitle}>{title}</h3>

        <p className={styles.serviceDescription}>
          {description.split(/(\[[^\]]+\])/).map((part, index) => {
            // Check if this part is a highlighted text marker
            const highlightMatch = part.match(/\[([^\]]+)\]/);

            if (highlightMatch) {
              return (
                <span key={index} className={styles.highlight}>
                  {highlightMatch[1]}
                </span>
              );
            }

            return part;
          })}
        </p>

        <div className={styles.readMoreWrapper}>
          <span className={styles.readMore}>Read More</span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
