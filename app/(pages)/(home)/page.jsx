"use client";

import { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import styles from "./home.module.scss";

export default function Home() {
  const reviews = [
    {
      text: "Such a gem of a store. Packed with vintage inventory so there is something for everyone! The price point is extremely fair and Donbi was so helpful. I am a Yesterday regular now!",
      author: "Carlye Tomasello",
      time: "a week ago",
    },
    {
      text: "Frequently rotating inventory, friendly staff and fair prices. A true davis gem!",
      author: "Wes Park",
      time: "2 weeks ago",
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
        <div className={`${styles["banner-item"]} ${styles.left}`}>
          <img src="/images/left-banner.png" alt="Picture left" />
        </div>
        <div className={`${styles["banner-item"]} ${styles.center}`}>
          <img src="/images/center-banner.png" alt="Middle picture" />
        </div>
        <div className={`${styles["banner-item"]} ${styles.right}`}>
          <img src="/images/right-banner.png" alt="Picture right" />
        </div>
      </section>

      <section className={styles["welcome"]}>

        <div className={styles["welcome-content"]}> 
          <h1 className={styles.title}>Welcome to <span className={styles["title-red"]}>Yesterday!</span></h1>
          <p className ={styles["welcome-text"]}> We are a locally owned and operated vintage clothing and accessories store located in Davis, California. We carry clothing in sizes XS-3X for all genders, spanning from the 60s to the early 2000s. Come stop by and say hi!</p>
          <a href="#" className={styles["learn-more-button"]}>Learn More</a>
        </div>

        <div className={styles["welcome-image"]}>
          <img src="/images/welcome-section.png" alt="Welcome Image"/>
        </div>

      </section>

      <section className={styles["events-container"]}>
        <div className={styles["event-card"]}>
          <img src="/images/event.png" alt="Event Calendar" />
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
          <button className={styles["events-btn"]}>Events</button>
        </div>
      </section>

      <section>
        <div className={styles["review-container"]}>
          <h1 className={styles.title}><span className={styles["title-red"]}>What Our Customers Say</span></h1>

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
              <img className={styles["stars"]} src="/images/stars.png"
                alt="Stars">
              </img>

              <p className={styles["text"]}>
                "{currentReview.text}"
              </p>

              <p className={styles["author"]}>
                {currentReview.author} <br />
                {currentReview.time}
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
