"use client";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";

const headers = [
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Shop", href: "/shop" },
  { label: "Frequently Asked Questions", href: "/faq" },
];

export default function Header() {
  const pathName = usePathname();
  const title = headers.find(p => p.href === pathName)?.label;

  return (
    title && (
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>
    )
  );
}
