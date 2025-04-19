// Reviews.tsx
import React from "react";
import styles from "./Reviews.module.css";
import AnimatedReviewHeader from "./animations/AnimatedReviewHeader";
import AnimatedReviewCard from "./animations/AnimatedReviewCard";

const Reviews: React.FC = () => {
  // Reviews data could be moved to a separate data file like serviceData
  const reviews = [
    {
      id: 1,
      name: "Imran Mia",
      location: "E1 5NS",
      text: "I have used JB plumbing and he has done a brilliant job in my bathroom. All the bath fixtures fixed and replaced, excellent job. Very polite and friendly man. Thanks.",
    },
    {
      id: 2,
      name: "Tom Wad",
      location: "E12 6RB",
      text: "It serviced and repaired my mum's boiler. Excellent work, punctual, patient, very knowledgeable and polite to me and my mum",
    },
    {
      id: 3,
      name: "Ruchin",
      location: "RM1 4BS",
      text: "The booster pump at my home was dying and I needed a new pump installation. He was very professional and did a high standard job. He also fixed the manufacturing fault causing water leaking from the pump hose. I highly recommend him and planned further work with him.",
    },
    {
      id: 4,
      name: "Imran Mia",
      location: "E1 5NS",
      text: "I have used JB plumbing and he has done a brilliant job in my bathroom. All the bath fixtures fixed and replaced, excellent job. Very polite and friendly man. Thanks.",
    },
  ];

  return (
    <section className={styles.reviewsSection} id="reviews">
      <div className={styles.container}>
        <AnimatedReviewHeader
          logoSrc="/images/checkatrade.svg"
          viewAllLink="https://www.checkatrade.com/"
        />

        <div className={styles.reviewsContainer}>
          {/* First Row */}
          <div className={styles.reviewRow}>
            <AnimatedReviewCard
              name={reviews[0].name}
              location={reviews[0].location}
              text={reviews[0].text}
              iconSrc="/images/review.svg"
              direction="left"
              delay={0.1}
            />

            <AnimatedReviewCard
              name={reviews[1].name}
              location={reviews[1].location}
              text={reviews[1].text}
              iconSrc="/images/review.svg"
              direction="right"
              delay={0.3}
            />
          </div>

          {/* Second Row */}
          <div className={styles.reviewRow}>
            <AnimatedReviewCard
              name={reviews[2].name}
              location={reviews[2].location}
              text={reviews[2].text}
              iconSrc="/images/review.svg"
              direction="left"
              delay={0.5}
            />

            <AnimatedReviewCard
              name={reviews[3].name}
              location={reviews[3].location}
              text={reviews[3].text}
              iconSrc="/images/review.svg"
              direction="right"
              delay={0.7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
