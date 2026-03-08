"use client";

import styles from "./faq.module.scss";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What days of the week are you open?",
    answer: (
      <>
        We are open every day of the week 12:00 PM - 6:00 PM! Check our Google
        Calendar on the <Link href="/shop">Shops</Link> page to see our holiday
        schedules.
      </>
    ),
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at 218 E St, right across the street from Chipotle!",
  },
  {
    question: "Do you buy clothes from the public?",
    answer:
      "Yes! All clothes must be 20 years or older and be in good condition. 15 items or less can be conducted virtually through Instagram DM's and 15 or more items can be conducted virtually or by scheduling a time in person.",
  },
  {
    question: "What days of the week are you open?",
    answer: (
      <>
        We are open every day of the week 12:00 PM - 6:00 PM! Check our Google
        Calendar on the <Link href="/shop">Shops</Link> page to see our holiday
        schedules.
      </>
    ),
  },
  {
    question: "What days of the week are you open?",
    answer: (
      <>
        We are open every day of the week 12:00 PM - 6:00 PM! Check our Google
        Calendar on the <Link href="/shop">Shops</Link> page to see our holiday
        schedules.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.container}>
        {faqs.map((faq, index) => (
          <FreqQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </main>
  );
}

export function FreqQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faq}>
      <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.content}>
          <div className={styles.letter}>Q.</div>
          <div className={styles.textQ}>{question}</div>
        </div>
        <div className={`${styles.arrow} ${isOpen ? styles.isOpen : ""}`}>
          <img src="/faq/dropdown.svg" alt="toggle arrow" />
        </div>
      </div>

      {isOpen && (
        <div className={styles.answer}>
          <div className={styles.content}>
            <div className={styles.letter}>A.</div>
            <div className={styles.textA}>{answer}</div>
          </div>
        </div>
      )}
    </div>
  );
}
