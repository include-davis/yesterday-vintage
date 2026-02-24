"use client";

import { useState } from "react";
import styles from "./cart.module.scss";
import Image from "next/image";

const ITEM_PRICE = 25;

export default function Cart() {
  const [quantities, setQuantities] = useState([1, 1, 1]);

  const handleChange = (index, delta) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(1, q + delta) : q))
    );
  };

  const subtotal = quantities.reduce(
    (total, qty) => total + qty * ITEM_PRICE,
    0
  );

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.productSection}>
        <p className={styles.label}>Product</p>

        {quantities.map((qty, index) => (
          <div key={index} className={styles.productItem}>
            <div className={styles.productImage}>
              <Image
                src="/assets/logo.png"
                alt="Product"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.productInfo}>
              <h4>Product Name</h4>
              <p className={styles.price}>${ITEM_PRICE}</p>
              <div className={styles.quantity}>
                <button
                  className={styles.quantityBtn}
                  onClick={() => handleChange(index, -1)}
                >
                  -
                </button>
                <span className={styles.quantityNum}>{qty}</span>
                <button
                  className={styles.quantityBtn}
                  onClick={() => handleChange(index, 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.subtotalSection}>
        <p className={styles.label}>Subtotal</p>
        <p className={styles.subtotalText}>
          Subtotal: ${subtotal.toFixed(2)}
        </p>
        <p className={styles.note}>Taxes and Shipping calculated at checkout</p>
        <button className={styles.checkoutBtn}>CHECKOUT</button>
      </div>
    </main>
  );
}
