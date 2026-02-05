import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Fraunces heading test</h1>
      <p className={styles.text}>Inter body test</p>
      <p className={styles.logo}>BOTCH TEST</p>
    </main>
  );
}
