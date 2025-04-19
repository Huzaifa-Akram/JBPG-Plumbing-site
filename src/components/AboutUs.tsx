"use client";

// AboutUs.jsx
import React from "react";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection} id="about-us">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <motion.div
            className={styles.imageGallery}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.mainImageWrapper}>
              <Image
                src="/images/about-us.png"
                alt="JB Plumbing & Heating Specialists"
                width={600}
                height={600}
                className={styles.mainImage}
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.h2>

            <motion.p
              className={styles.mainParagraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              When summer&apos;s heat rolls in, your home still deserves comfort
              without the drama. At JB Plumbing & Heating Specialists,
              we&apos;ve been London&apos;s trusted heating and plumbing experts
              for over 20 years, the team you call when you want service
              that&apos;s fast, friendly, and flawless. Whether it&apos;s a
              boiler check-up before winter, a sudden leak in July, or upgrading
              to a smarter system, we make it simple with no jargon and no
              surprises.
            </motion.p>

            <motion.p
              className={styles.secondaryParagraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Your comfort shouldn&apos;t depend on luck. That&apos;s why we
              warranty every repair and only recommend services we&apos;d trust
              in our own homes, because reliable plumbing and heating should be
              effortless, year-round.
            </motion.p>

            <motion.div
              className={styles.servicesContainer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.serviceColumn}>
                <h3 className={styles.serviceTitle}>Emergency 24/7 Service</h3>
                <ul className={styles.serviceList}>
                  <li className={styles.serviceItem}>Local Plumber</li>
                  <li className={styles.serviceItem}>Guaranteed</li>
                  <li className={styles.serviceItem}>Fully Insured</li>
                  <li className={styles.serviceItem}>Onsite in 1 hour</li>
                </ul>

                <div className={styles.serviceValues}>
                  <h4>Friendly & Helpful</h4>
                  <h4>Fast Reacting & Skilled</h4>
                </div>
              </div>

              <div className={styles.serviceColumn}>
                <h3 className={styles.serviceTitle}>Appointment Service</h3>
                <ul className={styles.serviceList}>
                  <li className={styles.serviceItem}>Taps, Toilet, Gas</li>
                  <li className={styles.serviceItem}>Boiler Installs</li>
                  <li className={styles.serviceItem}>All Plumbing</li>
                  <li className={styles.serviceItem}>Gas Safe</li>
                </ul>

                <div className={styles.serviceValues}>
                  <h4>Reliable & Trustworthy</h4>
                  <h4>Fixed Quote & Services</h4>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.ctaWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="/services"
                className={styles.ctaButton}
                aria-label="Read more about our services"
              >
                Read More
                <span className={styles.arrowIcon}>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
