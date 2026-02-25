"use client";
import { useState } from "react";
import styles from "./shop.module.scss";
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
  const [price, setPrice] = useState(100);
  const [searchQuery, setSearchQuery] = useState("");

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

    const matchesSearch = searchQuery.trim() === ""
      ? true
      : item.title.toLowerCase().includes(searchQuery.trim().toLowerCase());

    return matchesSize && matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>Shop</div>
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <div className={styles.filterContainer}>
            <div className={styles.searchBarWrapper}>
              <svg
                className={styles.searchIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className={styles.searchBar}
                placeholder=""
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className={styles.filterTitle}>CATEGORY</div>
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
              <div className={styles.border} />
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
              <div className={styles.border} />
              <div className={styles.priceFilter}>
                <div className={styles.priceFilterTitle}>PRICE</div>
                <label className={styles.priceFilterSlider}>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    id="slider"
                    value={price}
                    onChange={handlePriceChange}
                  />
                </label>
                <div className={styles.priceFilterValue}>${price}</div>
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
