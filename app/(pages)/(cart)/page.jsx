import styles from "./cart.module.scss";

export default function Cart() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Shopping Cart</h1>
      <p className={styles.text}>Your cart is empty</p>
    </main>
  );
}
