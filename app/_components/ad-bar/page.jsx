"use client";

import styles from "./ad-bar.module.scss";

const messages = Array(12).fill("Celebrate 2 Years with Yesterday!");

export default function AdBar(){
  
  return (
    <div className={styles.adBar}>
      <div className={styles.scroller}>
        {messages.map((messages, index) => (
          <span key = {index} className={styles.text}>
            {messages}
          </span>
        ))}
        {messages.map((messages, index) => (
          <span key = {index} className={styles.text}>
            {messages}
          </span>
        ))}
        </div>
    </div>
  );
}