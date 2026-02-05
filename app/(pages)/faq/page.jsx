"use client";

import styles from "./faq.module.scss";
import { useState } from "react";

export default function FAQ() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Frequently Asked Questions </h1>
      <FreqQ />
    </main>
  );
}

export function FreqQ() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.faq}>
      <button
        className = {styles.question}
        onClick={() => setIsOpen(!isOpen)}
      >
        Q. What days of the week are you open? {isOpen ? "▼" : "▼"}
        </button>

          {isOpen && (
            <div className={styles.answer}>
              A. We are open..... 
            </div>
          )}
        </nav>
    );
  }
