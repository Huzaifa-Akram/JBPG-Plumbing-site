// Services.tsx
import React from "react";
import styles from "./Services.module.css";
import { serviceData } from "../data/servicedata";
import AnimatedServicesTitle from "./animations/AnimatedServicesTitle";
import AnimatedServiceCard from "./animations/AnimatedServiceCard";

const Services: React.FC = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <AnimatedServicesTitle title="Our Services" />

        <div className={styles.servicesGrid}>
          {serviceData.map((service, index) => (
            <AnimatedServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
