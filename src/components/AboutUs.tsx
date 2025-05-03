import React from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";

const AboutUs = () => {
  const mainParagraph =
    "Reliable Plumbing & Heating Services in East London – No Drama, Just Solutions When summer’s heat hits East London, your home deserves cool comfort without the chaos. At JB Plumbing & Heating Specialists, we’ve been the go-to experts for over 20 years, delivering fast, friendly, and flawless service—because your comfort shouldn’t depend on luck.";
  const secondaryParagraph =
    "Whether you need a boiler service before winter, an urgent leak repair in July, or a smart heating upgrade, we keep things simple, honest, and stress-free. No jargon. No surprises. Just trusted solutions for homes and businesses across Stratford, Canary Wharf, Walthamstow, and beyond.";
  return (
    <section className={styles.aboutUsSection} id="about-us">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Image section - with performance optimizations */}
          <div className={styles.imageGallery}>
            <div className={styles.mainImageWrapper}>
              <Image
                src="/images/about-us.png"
                alt="JB Plumbing & Heating Specialists"
                width={600}
                height={600}
                className={styles.mainImage}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

          {/* Content section - previously AnimatedAboutContent */}
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>About Us</h2>
            <p className={styles.mainParagraph}>{mainParagraph}</p>
            <p className={styles.secondaryParagraph}>{secondaryParagraph}</p>

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
                href="tel:+442036332827"
                className={styles.ctaButton}
                aria-label="Need help? Call us now!"
              >
                Call Us Now
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
