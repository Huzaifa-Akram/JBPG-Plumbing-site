import React from "react";
import Image from "next/image";
import styles from "./ServiceDetail.module.css";
import { serviceData } from "@/data/servicedata";

interface ServiceDetailProps {
  slug: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug }) => {
  // Find the service with the matching slug
  const service = serviceData.find((service) => service.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.serviceDetailWrapper}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.description}>{service.fullDescription}</p>

          <div className={styles.serviceTypesContainer}>
            <h2 className={styles.serviceTypesTitle}>Our Services Include:</h2>
            <ul className={styles.serviceTypesList}>
              {service.serviceTypes &&
                service.serviceTypes.map((serviceType, index) => (
                  <li key={index} className={styles.serviceTypeItem}>
                    <Image
                      src="/icons/tick.svg"
                      alt="Checkmark"
                      width={20}
                      height={20}
                      className={styles.checkIcon}
                    />
                    <span>{serviceType}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className={styles.benefitsContainer}>
            <h2 className={styles.benefitsTitle}>Our Service Benefits</h2>
            <ul className={styles.benefitsList}>
              {service.benefits.map((benefit, index) => (
                <li key={index} className={styles.benefitItem}>
                  <Image
                    src="/icons/tick.svg"
                    alt="Checkmark"
                    width={20}
                    height={20}
                    className={styles.checkIcon}
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src={`/images/${service.image}`}
              alt={service.title}
              width={500}
              height={500}
              className={styles.serviceImage}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
