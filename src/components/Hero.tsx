import styles from "./Hero.module.css";
import AnimatedHeroContent from "./animations/AnimatedHeroContent";
import AnimatedHeroImage from "./animations/AnimatedHeroImage";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <AnimatedHeroContent
          description="We provide high-quality plumbing and heating solutions with 24/7 emergency service. Our licensed professionals are ready to solve all your plumbing problems quickly and efficiently."
          companyName="JB Plumbing & Heating"
        />
        <AnimatedHeroImage
          src="/images/plumber-img.svg"
          alt="Professional Plumber from JB Plumbing & Heating"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default Hero;
