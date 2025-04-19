"use client";

// Services.tsx
import React from "react";
import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard";
import { serviceData } from "../data/servicedata";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.line}></span>
          Our Services
          <span className={styles.line}></span>
        </motion.h2>

        <div className={styles.servicesGrid}>
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              highlightedText={service.highlightedText}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
