"use client";

import { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import styles from "./home.module.scss";

export default function Home() {
  const reviews = [
    {
      text: "The Yesterday Davis team is honest, friendly, and passionate for their shop and the larger Davis community. I can count on Yesterday Davis for a great time of mingling and browsing vintage clothing pieces ranging from staples to unique conversation starters. A shop curation perfect for all types of self expression through clothes!",
      author: "Luis M."
    },
    {
      text: "Yesterday has been my favorite stop downtown since they opened. Somehow they just know how to curate a fun, and trendy vintage selection while holding steadfast to the classics. In doing so, they’ve inspired many Davisites, myself included, to embrace and love sustainable fashion. Cheers!",
      author: "Ezrah V."
    },
    {
      text: "As a shop regular, there is no place like Yesterday in the Davis area. From the relaxed atmosphere, to the excellent service and top tier curation, Yesterday Vintage is truly a staple for clothing enthusiasts and newcomers alike.",
      author: "Roland G."
    },
    {
      text: "To me, this store is a space for self-expression. Each piece is unique, and together they allow me to curate a style that feels personal and authentic.",
      author: "Diana P."
    },
    {
      text: "Excellently curated vintage store run by a group of delightful people! I love to see their involvement in the community and I'm always looking forward to their next drop!",
      author: "Victoria M."
    },
    {
      text:  "I love it when people ask where I got my outfit from and I get to say, “I got it at Yesterday.",
      author: "Juliana D."
    }
  ];

  const [reviewIndex, setReviewIndex] = useState(0);
  const currentReview = reviews[reviewIndex];

  const goToPreviousReview = () => {
    setReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goToNextReview = () => {
    setReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className={styles.page}>

      <section className={styles["banner-container"]}>
        <div className={styles["banner-desktop"]}>
          <div className={`${styles["banner-item"]} ${styles.left}`}>
            <img src="/images/left-banner.png" alt="Picture left" />
          </div>
          <div className={`${styles["banner-item"]} ${styles.center}`}>
            <img src="/images/center-banner.png" alt="Middle picture" />
          </div>
          <div className={`${styles["banner-item"]} ${styles.right}`}>
            <img src="/images/right-banner.png" alt="Picture right" />
          </div>
        </div>


        <div className={styles["banner-mobile"]}>
          <img src="/images/mobile_banner.svg" alt="Mobile banner" />
          </div>
      </section>

      <section className={styles["welcome"]}>

        <div className={styles["welcome-content"]}>
          <h1 className={styles.title}>Welcome!</h1>
          <p className ={styles["welcome-text"]}> We are a locally owned and operated vintage clothing and accessories store located in Davis, California. We carry clothing in sizes XS-3X for all genders, spanning from the 60s to the early 2000s. Come stop by and say hi!</p>
          <a href="/about" className={styles["learn-more-button"]}>Learn More</a>
        </div>

        <div className={styles["welcome-image"]}>
          <img
            className={styles["welcome-image-desktop"]}
            src="/images/welcome-section.png"
            alt="Welcome Image"
          />
          <div className={styles["welcome-image-mobile-grid"]}>
            <img src="/images/welcome_topleft.png" alt="Welcome top left" />
            <img src="/images/welcome_topright.png" alt="Welcome top right" />
            <img src="/images/welcome_bottomleft.png" alt="Welcome bottom left" />
            <img src="/images/welcome_bottomright.png" alt="Welcome bottom right" />
          </div>
        </div>

      </section>

      <section className={styles["events-container"]}>
        <div className={styles["event-card"]}>
          <img
            className={styles["event-image-desktop"]}
            src="/images/event.png"
            alt="Event Calendar"
          />
          <img
            className={styles["event-image-mobile"]}
            src="/images/mobile_events.svg"
            alt="Event Calendar"
          />
        </div>

        <div className={styles["event-info"]}>
          <h2 className={styles["event-title"]}>Events</h2>
          <ul className={styles["event-list"]}>
            <li>Day in Downtown</li>
            <li>___</li>
            <li>___</li>
            <li>___</li>
            <li>___</li>
            <li>In-Store Events</li>
          </ul>
          <a href="/events" className={styles["events-btn"]}>Events</a>
        </div>
      </section>

      <section>
        <div className={styles["review-container"]}>
          <h1 className={styles.title}><span className={styles["title-red"]}>Words from Our Community</span></h1>

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

              <p className={styles["text"]}>
                "{currentReview.text}"
              </p>
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
              <article key={`${review.author}-${index}`} className={styles["review-card"]}>
                <p className={styles["author"]}>
                  {review.author} <br />
                  {review.time}
                </p>
                <p className={styles["text"]}>
                  "{review.text}"
                </p>
              </article>
            ))}
          </div>


        </div>
      </section>

      <section>
        <div className={styles["social-container"]}>
          <h1 className={styles.title}><span className={styles["title-red"]}>Follow us on social!</span></h1>
          <div className={styles["social-img-container"]}>

            <div className={styles["social-card"]}>
              <img
                className={styles["social-image"]}
                src="/images/instagram.png"
                alt="Instagram"
              />
              <a
                className={styles["social-btn"]}
                href="https://www.instagram.com/yesterdaydavis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles["social-icon"]} aria-hidden="true" />
                <span className={styles["social-label"]}>Instagram</span>
              </a>
            </div>

            <div className={styles["social-card"]}>
              <img
                className={styles["social-image"]}
                src="/images/tiktok.png"
                alt="TikTok"
              />
              <a
                className={styles["social-btn"]}
                href="https://www.tiktok.com/@yesterdaydavis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className={styles["social-icon"]} aria-hidden="true" />
                <span className={styles["social-label"]}>TikTok</span>
              </a>
            </div>

            <div className={styles["social-card"]}>
              <img
                className={styles["social-image"]}
                src="/images/facebook.png"
                alt="Facebook"
              />
              <a
                className={styles["social-btn"]}
                href="https://www.facebook.com/p/Yesterday-Davis-61555736068926"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className={styles["social-icon"]} aria-hidden="true" />
                <span className={styles["social-label"]}>Facebook</span>
              </a>
            </div>

          </div>


        </div>

      </section>
    </main>
  );
}
