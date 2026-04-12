"use client";
import { useState } from "react";
import styles from "../shop.module.scss";
import { Item } from "./Item.jsx";

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

export default function ShopClient({ products }) {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedCategories, setSelectedCategories] = useState({});
  const [price, setPrice] = useState(100);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSizeChange = (e) => {
    setSelectedSizes({ ...selectedSizes, [e.target.name]: e.target.checked });
  };

  const handleCategoryChange = (e) => {
    setSelectedCategories({
      ...selectedCategories,
      [e.target.name]: e.target.checked,
    });
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const filteredClothes = products.filter((item) => {
    const isAnySizeSelected = Object.values(selectedSizes).some(
      (isSelected) => isSelected,
    );
    const matchesSize = isAnySizeSelected
      ? sizeOptions.some(
          (opt) => selectedSizes[opt.id] && item.options?.toLowerCase().includes(opt.id)
        )
      : true;

    const isAnyCategorySelected = Object.values(selectedCategories).some(
      (isSelected) => isSelected,
    );
    const matchesCategory = isAnyCategorySelected
      ? selectedCategories[item.category]
      : true;

    const matchesPrice = parseFloat(item.price) <= price;

    const matchesSearch =
      searchQuery.trim() === ""
        ? true
        : item.name.toLowerCase().includes(searchQuery.trim().toLowerCase());

    return matchesSize && matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <main className={styles.page}>
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <div className={styles.filterContainer}>
            <div className={styles.merchandiseTitleMobile}>
              Shop Yesterday Vintage's Merchandise
            </div>
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
            <button
              className={styles.filterTitleBtn}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span>CATEGORY</span>
              <svg
                className={`${styles.filterChevron} ${isFilterOpen ? styles.open : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.filter} ${isFilterOpen ? styles.filterOpen : ""}`}>
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
                <div className={styles.priceFilterValue}>{'<'}${price}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.merchandiseTitle}>
            Shop Yesterday Vintage's Merchandise
          </div>
          <div className={styles.merchandise}>
            {filteredClothes.map((item) => (
              <div key={item.id} className={styles.Item}>
                <Item item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
