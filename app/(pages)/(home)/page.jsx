import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.topBar}>Shop</div>
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <h2>Shop prefs</h2>
        </div>
        <div className={styles.rightSection}>
          <h2>Shop Items</h2>
        </div>
      </div>
    </main>
  );
}
