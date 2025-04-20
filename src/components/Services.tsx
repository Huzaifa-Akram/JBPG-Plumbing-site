// Services.tsx
import React from "react";
import styles from "./Services.module.css";
import { serviceData } from "../data/servicedata";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        {/* Services Title */}
        <div className={styles.sectionTitle}>
          <div className={styles.line}></div>
          Our Services
          <div className={styles.line}></div>
        </div>

        <div className={styles.servicesGrid}>
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              highlightedText={[]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
