"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./cart.module.scss";
import { useCart } from "../../_context/CartContext";

export default function Cart() {
  const { items, updateQuantity, subtotal } = useCart();

  return (
    <main className={styles.page}>
      {/* <div className={styles.topBar}>
        Shopping Cart
      </div> */}
      <div className={styles.content}>
        <Link href="/shop" className={styles.backToShop}>
          ← Continue shopping
        </Link>
        <div className={styles.productSection}>
          <p className={styles.label}>Product</p>

          {items.length === 0 ? (
            <p style={{ marginTop: "2rem" }}>Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className={styles.productItem}>
                <div className={styles.productImage}>
                  <Image
                    src="/assets/logo.png"
                    alt={item.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 9.375rem, 24rem"
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
          <p className={styles.note}>
            Taxes and Shipping calculated at checkout
          </p>
          <button type="button" className={styles.checkoutBtn}>
            CHECKOUT
          </button>
        </div>
      </div>
    </main>
  );
}
