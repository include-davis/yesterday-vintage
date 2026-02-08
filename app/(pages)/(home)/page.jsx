"use client";
import { useState } from "react";
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
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedCategories, setSelectedCategories] = useState({});
  const [price, setPrice] = useState(50);

  const handleSizeChange = (e) => {
    setSelectedSizes({ ...selectedSizes, [e.target.name]: e.target.checked });
  };

  const handleCategoryChange = (e) => {
    setSelectedCategories({ ...selectedCategories, [e.target.name]: e.target.checked });
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const filteredClothes = clothes.filter((item) => {
    const isAnySizeSelected = Object.values(selectedSizes).some((isSelected) => isSelected);
    const matchesSize = isAnySizeSelected ? selectedSizes[item.size] : true;

    const isAnyCategorySelected = Object.values(selectedCategories).some((isSelected) => isSelected);
    const matchesCategory = isAnyCategorySelected ? selectedCategories[item.category] : true;

    const matchesPrice = parseFloat(item.price) <= price;

    return matchesSize && matchesCategory && matchesPrice;
  });

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>Shop</div>
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <div className={styles.filterContainer}>
            <div className={styles.filterTitle}>Category</div>
            <div className={styles.filter}>
              <div className={styles.sizeOptions}>
                {sizeOptions.map((option) => (
                  <div key={option.id} className={styles.filterOption}>
                    <input
                      type="checkbox"
                      id={option.id}
                      name={option.id}
                      checked={!!selectedSizes[option.id]}
                      onChange={handleSizeChange}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                ))}
              </div>
              <div className={styles.clothesOptions}>
                {clothesOptions.map((option) => (
                  <div key={option.id} className={styles.filterOption}>
                    <input
                      type="checkbox"
                      id={option.id}
                      name={option.id}
                      checked={!!selectedCategories[option.id]}
                      onChange={handleCategoryChange}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                ))}
              </div>
              <div className={styles.priceFilter}>
                <div className={styles.priceFilterTitle}>Price: ${price}</div>
                <label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    id="slider"
                    value={price}
                    onChange={handlePriceChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.merchandiseTitle}>Shop Yesterday Vintage's Merchandise</div>
          <div className={styles.merchandise}>
            {filteredClothes.map((item, index) => (
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
