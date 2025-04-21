import Link from "next/link";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Hero content - previously AnimatedHeroContent */}
        <div className={styles.heroContent}>
          <div className={styles.companyName}>
            <span>
              <span style={{ color: "#29aae3" }}>—</span> JB Plumbing & Heating{" "}
              <span style={{ color: "#29aae3" }}>—</span>
            </span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.professional}>Professional</span> Plumbing
            <br />
            Services <span className={styles.accent}>For Your Home &</span>
            <br />
            <span className={styles.accent}>Business</span>
          </h1>

          <p className={styles.heroDescription}>
            We provide high-quality plumbing and heating solutions with 24/7
            emergency service. Our licensed professionals are ready to solve all
            your plumbing problems quickly and efficiently.
          </p>

          <div className={styles.heroCTA}>
            <div className={styles.serviceFeatures}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  <Image
                    src="/icons/clock.svg"
                    alt="24/7 Service"
                    width={20}
                    height={20}
                    loading="eager"
                  />
                </span>
                <span className={styles.featureText}>24/7 Services</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  <Image
                    src="/icons/hammar.svg"
                    alt="Licensed Experts"
                    width={20}
                    height={20}
                    loading="eager"
                  />
                </span>
                <span className={styles.featureText}>Licensed Experts</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  <Image
                    src="/icons/tick.svg"
                    alt="Guaranteed Work"
                    width={20}
                    height={20}
                    loading="eager"
                  />
                </span>
                <span className={styles.featureText}>Guaranteed Work</span>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <Link href="/contact-us" className={styles.contactButton}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Hero image - optimized for performance */}
        <div className={styles.heroImage}>
          <Image
            src="/images/plumber-img.svg"
            alt="Professional Plumber from JB Plumbing & Heating"
            width={400}
            height={400}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 400px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
