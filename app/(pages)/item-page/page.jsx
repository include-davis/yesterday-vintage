"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./item-page.module.scss";

export default function ItemPage() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <main className={styles.page}>
      <button className={styles.back} onClick={() => router.back()}>
        Back
      </button>

      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/logo.png"
            alt="Product"
            width={505}
            height={365}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className={styles.info}>
          <h2 className={styles.name}>Product Name</h2>

          <div className={styles.description}>
            <p>ABOUT THE PRODUCT</p>
            <p>ABOUT THE PRODUCT</p>
            <p>ABOUT THE PRODUCT</p>
          </div>

          <div className={styles.options}>
            <p className={styles.optionsLabel}>OPTIONS</p>
            <ul>
              <li>Small</li>
              <li>Medium</li>
              <li>Large</li>
            </ul>
          </div>

          <p className={styles.price}>$25</p>

          <div className={styles.quantitySection}>
            <p className={styles.quantityLabel}>Quantity</p>
            <div className={styles.quantity}>
              <button className={styles.quantityBtn} onClick={handleDecrease}>
                -
              </button>
              <span className={styles.quantityNum}>{quantity}</span>
              <button className={styles.quantityBtn} onClick={handleIncrease}>
                +
              </button>
            </div>
          </div>

          <button className={styles.addToCart}>ADD TO CART</button>
        </div>
      </div>
    </main>
  );
}
