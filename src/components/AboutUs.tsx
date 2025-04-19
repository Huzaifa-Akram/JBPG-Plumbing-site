import React from "react";
import styles from "./AboutUs.module.css";
import AnimatedAboutImage from "./animations/AnimatedAboutImage";
import AnimatedAboutContent from "./animations/AnimatedAboutContent";

const AboutUs = () => {
  const mainParagraph =
    "When summer's heat rolls in, your home still deserves comfort without the drama. At JB Plumbing & Heating Specialists, we've been London's trusted heating and plumbing experts for over 20 years, the team you call when you want service that's fast, friendly, and flawless. Whether it's a boiler check-up before winter, a sudden leak in July, or upgrading to a smarter system, we make it simple with no jargon and no surprises.";

  const secondaryParagraph =
    "Your comfort shouldn't depend on luck. That's why we warranty every repair and only recommend services we'd trust in our own homes, because reliable plumbing and heating should be effortless, year-round.";

  return (
    <section className={styles.aboutUsSection} id="about-us">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <AnimatedAboutImage
            src="/images/about-us.png"
            alt="JB Plumbing & Heating Specialists"
            width={600}
            height={600}
          />

          <AnimatedAboutContent
            title="About Us"
            mainParagraph={mainParagraph}
            secondaryParagraph={secondaryParagraph}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
