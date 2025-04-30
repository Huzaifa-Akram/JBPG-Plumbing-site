// Services.tsx
import React from "react";
import styles from "./Services.module.css";
import { serviceData } from "../data/servicedata";
import ServiceCard from "./ServiceCard";
import AnimatedServicesTitle from "./animations/AnimatedServicesTitle";

const Services: React.FC = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        {/* Services Title */}
        <AnimatedServicesTitle>
          <div className={styles.sectionTitle}>
            <div className={styles.line}></div>
            Our Services
            <div className={styles.line}></div>
          </div>
        </AnimatedServicesTitle>

        <div className={styles.servicesGrid}>
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              highlightedText={service.highlightedText}
              index={index}
              slug={service.slug} // Pass the slug to the ServiceCard
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
