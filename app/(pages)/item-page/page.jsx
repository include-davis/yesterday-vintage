"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./item-page.module.scss";
import { useCart } from "../../_context/CartContext";
import { getItemById } from "../../lists/clothes.js";

export default function ItemPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemId = searchParams.get("id");
  const product = useMemo(() => getItemById(itemId), [itemId]);

  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const { items, addItem, updateQuantity, subtotal } = useCart();

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!product) return;
    addItem({
      id: product.id,
      name: product.title,
      price: parseFloat(product.price),
      image: product.src,
      quantity,
    });
    setShowCart(true);
  };

  if (!product) {
    return (
      <main className={styles.page}>
        <Link href="/shop" className={styles.back}>
          Back to shop
        </Link>
        <p>Product not found.</p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <button className={styles.back} onClick={() => router.back()}>
        Back
      </button>

      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/logo.png"
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 540px) 100vw, (max-width: 1048px) 50vw, 505px"
          />
        </div>

        <div className={styles.info}>
          <h2 className={styles.name}>{product.title}</h2>

          <div className={styles.description}>
            <p>ABOUT THE PRODUCT</p>
            <p>ABOUT THE PRODUCT</p>
            <p>ABOUT THE PRODUCT</p>
          </div>

          <div className={styles.options}>
            <p className={styles.optionsLabel}>OPTIONS</p>
            <ul>
              <li>{product.size}</li>
            </ul>
          </div>

          <p className={styles.price}>${product.price}</p>

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

          <button className={styles.addToCart} onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <div
        className={`${styles.cartDrawer} ${
          showCart ? styles.cartDrawerOpen : styles.cartDrawerClosed
        }`}
      >
        <div className={styles.cartDrawerInner}>
          <div className={styles.cartDrawerHeader}>
            <h2>Shopping Cart</h2>
            <button
              type="button"
              className={styles.cartClose}
              onClick={() => setShowCart(false)}
            >
              X
            </button>
          </div>

          <div className={styles.cartItems}>
            {items.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.cartItemImage}>
                    <Image
                      src="/assets/logo.png"
                      alt={item.name}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                      sizes="6.5rem"
                    />
                  </div>
                  <div className={styles.cartItemInfo}>
                    <p className={styles.cartItemName}>{item.name}</p>
                    <p className={styles.cartItemPrice}>${item.price}</p>
                    <div className={styles.cartItemQuantity}>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
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

          <div className={styles.cartDrawerFooter}>
            <div className={styles.cartSubtotalRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className={styles.cartTaxes}>
              Taxes and Shipping calculated at checkout
            </p>
            <div className={styles.cartDrawerButtons}>
              <button
                type="button"
                className={styles.cartSecondaryButton}
                onClick={() => setShowCart(false)}
              >
                KEEP SHOPPING
              </button>
              <Link
                href="/cart"
                className={styles.cartPrimaryButton}
                onClick={() => setShowCart(false)}
              >
                VIEW CART
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
