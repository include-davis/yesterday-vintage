"use client";

import Image from "next/image";
import styles from "./cart.module.scss";
import { useCart } from "../../_context/CartContext";

export default function Cart() {
  const { items, updateQuantity, subtotal } = useCart();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.productSection}>
        <p className={styles.label}>Product</p>

        {items.length === 0 ? (
          <p style={{ marginTop: "2rem" }}>Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className={styles.productItem}>
              <div className={styles.productImage}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.productInfo}>
                <h4>{item.name}</h4>
                <p className={styles.price}>${item.price}</p>
                <div className={styles.quantity}>
                  <button
                    type="button"
                    className={styles.quantityBtn}
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className={styles.quantityNum}>{item.quantity}</span>
                  <button
                    type="button"
                    className={styles.quantityBtn}
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={styles.subtotalSection}>
        <p className={styles.label}>Subtotal</p>
        <p className={styles.subtotalText}>
          Subtotal: ${subtotal.toFixed(2)}
        </p>
        <p className={styles.note}>Taxes and Shipping calculated at checkout</p>
        <button type="button" className={styles.checkoutBtn}>
          CHECKOUT
        </button>
      </div>
    </main>
  );
}
