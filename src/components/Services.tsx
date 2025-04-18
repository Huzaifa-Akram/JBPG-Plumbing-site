// Services.tsx
import React from "react";
import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard";
import { serviceData } from "../data/servicedata";

const Services: React.FC = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.line}></span>
          Our Services
          <span className={styles.line}></span>
        </h2>

        <div className={styles.servicesGrid}>
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              highlightedText={service.highlightedText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
