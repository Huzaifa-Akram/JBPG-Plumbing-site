// AboutUs.jsx
import React from "react";
import Image from "next/image";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection} id="about-us">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageGallery}>
            <div className={styles.mainImageWrapper}>
              <Image
                src="/images/about-us.png"
                alt="JB Plumbing & Heating Specialists"
                width={600}
                height={600}
                className={styles.mainImage}
              />
            </div>
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>About Us</h2>

            <p className={styles.mainParagraph}>
              When summer&apos;s heat rolls in, your home still deserves comfort
              without the drama. At JB Plumbing & Heating Specialists,
              we&apos;ve been London&apos;s trusted heating and plumbing experts
              for over 20 years, the team you call when you want service
              that&apos;s fast, friendly, and flawless. Whether it&apos;s a
              boiler check-up before winter, a sudden leak in July, or upgrading
              to a smarter system, we make it simple with no jargon and no
              surprises.
            </p>

            <p className={styles.secondaryParagraph}>
              Your comfort shouldn&apos;t depend on luck. That&apos;s why we
              warranty every repair and only recommend services we&apos;d trust
              in our own homes, because reliable plumbing and heating should be
              effortless, year-round.
            </p>

            <div className={styles.servicesContainer}>
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
            </div>

            <div className={styles.ctaWrapper}>
              <a
                href="/services"
                className={styles.ctaButton}
                aria-label="Read more about our services"
              >
                Read More
                <span className={styles.arrowIcon}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
