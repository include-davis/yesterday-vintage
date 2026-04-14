"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Item.module.scss";

export function Item({ item }) {
  const { id, imageUrl, name, price } = item;
  return (
    <div className={styles.item}>
      <div className={styles.imageContainer}>
        <Link href={`/shop/${id}`} className={styles.itemLink}>
          <Image src={imageUrl} alt={name} width={400} height={400} />
          <div className={styles.infoContainer}>
            <h3>{name}</h3>
            <p>${price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
