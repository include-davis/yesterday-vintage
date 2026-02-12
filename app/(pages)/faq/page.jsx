"use client";

import styles from "./faq.module.scss";
import { useState } from "react";

export default function FAQ() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Frequently Asked Questions </h1>
      <FreqQ 
        question="What days of the week are you open?" 
        answer="We are open every day of the week 12:00 PM - 6:00 PM! Check our google calendar on the Shops page to see our holiday schedules." 
      />

      <FreqQ 
        question="Where are you located?" 
        answer="We are located at 218 E St, right across the street from Chipotle!" 
      />

      <FreqQ 
        question="Do you buy clothes from the public?" 
        answer="Yes! All clothes must be 20 years or older and be in good condition. 15 items or less can be conducted virtually through Instagram DM's and 15 or more items can be conducted virtually or by scheduling a time in person." 
      />
    </main>
  );
}

export function FreqQ({question, answer}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faq}>
      <div className = {styles.question} onClick={() => setIsOpen(!isOpen)}>
        <div className = {styles.content}>
          <span className = {styles.letter}> Q. </span>
          <span className = {styles.text}> {question}</span>
        </div>
         <span className = {styles.arrow}> {isOpen ? "▲" : "▼"}</span>
        </div>

          {isOpen && (
            <div className={styles.answer}>
              <div className = {styles.content}>
              <span className = {styles.letter}> A. </span>
              <span className = {styles.text}> {answer}</span>
              </div>
            </div>
          )}
        </div>
    );
  }

