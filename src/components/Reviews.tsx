// Reviews.tsx
import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";

const Reviews: React.FC = () => {
  return (
    <section className={styles.reviewsSection} id="reviews">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.line}></span>
          Reviews
          <span className={styles.line}></span>
        </h2>

        <div className={styles.checkatradeHeader}>
          <Image
            src="/images/checkatrade.svg"
            alt="Checkatrade Logo"
            width={200}
            height={50}
            className={styles.checkatradeLogo}
          />
          <a href="https://www.checkatrade.com/" className={styles.viewAllLink}>
            View All
          </a>
        </div>

        <div className={styles.reviewsContainer}>
          {/* First Row */}
          <div className={styles.reviewRow}>
            {/* Review 1 */}
            <div className={styles.reviewCard}>
              <div className={styles.reviewLeft}>
                <Image
                  src="/images/review.svg"
                  alt="Checkatrade verified"
                  width={60}
                  height={60}
                  className={styles.checkatradeIcon}
                />
                <div className={styles.reviewAuthor}>
                  <p className={styles.authorName}>Imran Mia</p>
                  <p className={styles.authorLocation}>E1 5NS</p>
                </div>
              </div>
              <div className={styles.reviewContent}>
                <p className={styles.reviewText}>
                  &ldquo;I have used JB plumbing and he has done a brilliant job in my
                  bathroom. All the bath fixtures fixed and replaced, excellent
                  job. Very polite and friendly man. Thanks.&rdquo;
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className={styles.reviewCard}>
              <div className={styles.reviewLeft}>
                <Image
                  src="/images/review.svg"
                  alt="Checkatrade verified"
                  width={60}
                  height={60}
                  className={styles.checkatradeIcon}
                />
                <div className={styles.reviewAuthor}>
                  <p className={styles.authorName}>Tom Wad</p>
                  <p className={styles.authorLocation}>E12 6RB</p>
                </div>
              </div>
              <div className={styles.reviewContent}>
                <p className={styles.reviewText}>
                  &ldquo;It serviced and repaired my mum&rsquo;s boiler. Excellent work,
                  punctual, patient, very knowledgeable and polite to me and my
                  mum&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className={styles.reviewRow}>
            {/* Review 3 */}
            <div className={styles.reviewCard}>
              <div className={styles.reviewLeft}>
                <Image
                  src="/images/review.svg"
                  alt="Checkatrade verified"
                  width={60}
                  height={60}
                  className={styles.checkatradeIcon}
                />
                <div className={styles.reviewAuthor}>
                  <p className={styles.authorName}>Ruchin</p>
                  <p className={styles.authorLocation}>RM1 4BS</p>
                </div>
              </div>
              <div className={styles.reviewContent}>
                <p className={styles.reviewText}>
                  &ldquo;The booster pump at my home was dying and I needed a new pump
                  installation. He was very professional and did a high standard
                  job. He also fixed the manufacturing fault causing water
                  leaking from the pump hose. I highly recommend him and planned
                  further work with him.&rdquo;
                </p>
              </div>
            </div>

            {/* Review 4 */}
            <div className={styles.reviewCard}>
              <div className={styles.reviewLeft}>
                <Image
                  src="/images/review.svg"
                  alt="Checkatrade verified"
                  width={60}
                  height={60}
                  className={styles.checkatradeIcon}
                />
                <div className={styles.reviewAuthor}>
                  <p className={styles.authorName}>Imran Mia</p>
                  <p className={styles.authorLocation}>E1 5NS</p>
                </div>
              </div>
              <div className={styles.reviewContent}>
                <p className={styles.reviewText}>
                  &ldquo;I have used JB plumbing and he has done a brilliant job in my
                  bathroom. All the bath fixtures fixed and replaced, excellent
                  job. Very polite and friendly man. Thanks.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
