"use client";

import styles from "./faq.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function FAQClient({ faqs }) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {faqs.map((faq) => (
          <FreqQ key={faq.id} question={faq.question} answer={faq.answer} />
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
            <div
              className={styles.textA}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
