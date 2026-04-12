"use client";

import { useState } from "react";
import styles from "./home.module.scss";

const reviews = [
  {
    text: "The Yesterday Davis team is honest, friendly, and passionate for their shop and the larger Davis community. I can count on Yesterday Davis for a great time of mingling and browsing vintage clothing pieces ranging from staples to unique conversation starters. A shop curation perfect for all types of self expression through clothes!",
    author: "Luis M.",
  },
  {
    text: "Yesterday has been my favorite stop downtown since they opened. Somehow they just know how to curate a fun, and trendy vintage selection while holding steadfast to the classics. In doing so, they've inspired many Davisites, myself included, to embrace and love sustainable fashion. Cheers!",
    author: "Ezrah V.",
  },
  {
    text: "As a shop regular, there is no place like Yesterday in the Davis area. From the relaxed atmosphere, to the excellent service and top tier curation, Yesterday Vintage is truly a staple for clothing enthusiasts and newcomers alike.",
    author: "Roland G.",
  },
  {
    text: "To me, this store is a space for self-expression. Each piece is unique, and together they allow me to curate a style that feels personal and authentic.",
    author: "Diana P.",
  },
  {
    text: "Excellently curated vintage store run by a group of delightful people! I love to see their involvement in the community and I'm always looking forward to their next drop!",
    author: "Victoria M.",
  },
  {
    text: "I love it when people ask where I got my outfit from and I get to say, 'I got it at Yesterday.'",
    author: "Juliana D.",
  },
];

export default function ReviewCarousel() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const currentReview = reviews[reviewIndex];

  const goToPreviousReview = () => {
    setReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goToNextReview = () => {
    setReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section>
      <div className={styles["review-container"]}>
        <h1 className={styles.title}>
          <span className={styles["title-red"]}>Words from Our Community</span>
        </h1>

        <div className={styles["reviews"]}>
          <button
            type="button"
            className={styles["left-arrow"]}
            onClick={goToPreviousReview}
            aria-label="Previous review"
          >
            <img src="/images/leftarrow.svg" alt="" aria-hidden="true" />
          </button>

          <div className={styles["review-text"]}>
            <p className={styles["author"]}>
              {currentReview.author} <br />
              {currentReview.time}
            </p>
            <p className={styles["text"]}>{currentReview.text}</p>
          </div>

          <button
            type="button"
            className={styles["right-arrow"]}
            onClick={goToNextReview}
            aria-label="Next review"
          >
            <img src="/images/rightarrow.svg" alt="" aria-hidden="true" />
          </button>
        </div>

        <div className={styles["reviews-mobile"]} aria-label="Customer reviews">
          {reviews.map((review, index) => (
            <article
              key={`${review.author}-${index}`}
              className={styles["review-card"]}
            >
              <p className={styles["author"]}>
                {review.author} <br />
                {review.time}
              </p>
              <p className={styles["text"]}>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
