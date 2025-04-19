"use client";
import React, { useState } from "react";
import styles from "./FAQs.module.css";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  title?: string;
  faqs: FAQItem[];
  imageUrl?: string;
  imageAlt?: string;
}

const FAQs: React.FC<FAQsProps> = ({
  title = "Frequently Asked Questions",
  faqs,
  imageUrl = "/images/suitcase.png", // Default to suitcase image
  imageAlt = "Plumbing tools illustration",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [imageError, setImageError] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleImageError = () => {
    console.log("Image failed to load");
    setImageError(true);
  };

  return (
    <section className={styles.faqSection} aria-labelledby="faq-heading">
      <div className={styles.faqContainer}>
        <div className={styles.faqContentWrapper}>
          <h2 id="faq-heading" className={styles.faqTitle}>
            Frequently Asked Questions
          </h2>

          <div className={styles.faqLayout}>
            {imageUrl && !imageError && (
              <div className={styles.faqImageContainer}>
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  className={styles.faqImage}
                  width={350}
                  height={350}
                  onError={handleImageError}
                  priority={false}
                />
              </div>
            )}

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div
                  key={`faq-${index}`}
                  className={`${styles.faqItem} ${
                    openIndex === index ? styles.faqItemOpen : ""
                  }`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon}>
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={styles.faqAnswer}
                    style={{
                      display: openIndex === index ? "block" : "none",
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>

                  <div className={styles.faqDivider}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
