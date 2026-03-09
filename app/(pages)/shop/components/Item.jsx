"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Item.module.scss";

export function Item({ item }) {
  const { id, src, title, price } = item;
  return (
    <div className={styles.item}>
      <div className={styles.imageContainer}>
        <Link href={`/item-page?id=${id}`} className={styles.itemLink}>
          <Image src={src} alt={title} width={400} height={400} />
          <div className={styles.infoContainer}>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
