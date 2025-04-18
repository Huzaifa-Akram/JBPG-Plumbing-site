// ServiceCard.tsx
import React from "react";
import Image from "next/image";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  highlightedText: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  description,
}) => {
  // Create image filename by replacing spaces with hyphens and making lowercase
  const imageFileName = icon;

  return (
    <div className={styles.serviceCard}>
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
    </div>
  );
};

export default ServiceCard;
