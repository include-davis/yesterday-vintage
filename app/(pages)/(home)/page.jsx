import styles from "./home.module.scss";
import { clothes } from "../../lists/clothes.js";
import { Item } from "./components/Item.jsx";

const sizeOptions = [
  { id: "x-small", label: "X-SMALL" },
  { id: "small", label: "SMALL" },
  { id: "medium", label: "MEDIUM" },
  { id: "large", label: "LARGE" },
  { id: "x-large", label: "X-LARGE" },
];

const clothesOptions = [
  { id: "shirts", label: "SHIRTS" },
  { id: "hoodies", label: "HOODIES" },
  { id: "accessories", label: "ACCESSORIES" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.topBar}>Shop</div>
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <div className={styles.filterTitle}>Category</div>
          <div className={styles.filter}>
            <div className={styles.sizeOptions}>
              {sizeOptions.map((option) => (
                <div key={option.id} className={styles.filterOption}>
                  <input type="checkbox" id={option.id} name={option.id} />
                  <label htmlFor={option.id}>{option.label}</label>
                </div>
              ))}
            </div>
            <div className={styles.clothesOptions}>
              {clothesOptions.map((option) => (
                <div key={option.id} className={styles.filterOption}>
                  <input type="checkbox" id={option.id} name={option.id} />
                  <label htmlFor={option.id}>{option.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.merchandiseTitle}>Shop Yesterday Vintage's Merchandise</div>
          <div className={styles.merchandise}>
            {clothes.map((item, index) => (
              <div key={index} className={styles.Item}>
                <Item
                  src={item.src}
                  title={item.title}
                  price={item.price}
                />
              </div>
            ))}</div>

        </div>
      </div>
    </main>
  );
}
