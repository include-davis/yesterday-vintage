import styles from "./cart.module.scss";
import Image from "next/image";

export default function Cart() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.productSection}>
        <p className={styles.label}>Product</p>
        
        <div className={styles.productItem}>
          <div className={styles.productImage}>
            <Image 
              src="/assets/logo.png" 
              alt="Product" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.productInfo}>
            <h4>Product Name</h4>
            <p className={styles.price}>$25</p>
            <div className={styles.quantity}>
              <button className={styles.quantityBtn}>-</button>
              <span className={styles.quantityNum}>1</span>
              <button className={styles.quantityBtn}>+</button>
            </div>
          </div>
        </div>

        <div className={styles.productItem}>
          <div className={styles.productImage}>
            <Image 
              src="/assets/logo.png" 
              alt="Product" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.productInfo}>
            <h4>Product Name</h4>
            <p className={styles.price}>$25</p>
            <div className={styles.quantity}>
              <button className={styles.quantityBtn}>-</button>
              <span className={styles.quantityNum}>1</span>
              <button className={styles.quantityBtn}>+</button>
            </div>
          </div>
        </div>

        <div className={styles.productItem}>
          <div className={styles.productImage}>
            <Image 
              src="/assets/logo.png" 
              alt="Product" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.productInfo}>
            <h4>Product Name</h4>
            <p className={styles.price}>$25</p>
            <div className={styles.quantity}>
              <button className={styles.quantityBtn}>-</button>
              <span className={styles.quantityNum}>1</span>
              <button className={styles.quantityBtn}>+</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.subtotalSection}>
        <p className={styles.label}>Subtotal</p>
        <p className={styles.subtotalText}>Subtotal: $100.00</p>
        <p className={styles.note}>Taxes and Shipping calculated at checkout</p>
        <button className={styles.checkoutBtn}>CHECKOUT</button>
      </div>
    </main>
  );
}
