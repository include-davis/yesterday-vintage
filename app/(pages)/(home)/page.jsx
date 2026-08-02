import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import styles from "./home.module.scss";
import ReviewCarousel from "../../_components/review-carousel/page.jsx";

import heroTop from "../../../public/images/home/hero-top.webp";
import heroLeft from "../../../public/images/home/hero-left.webp";
import heroRight from "../../../public/images/home/hero-right.webp";

export const dynamic = "force-dynamic";

const socialFallbackData = [
  {
    id: "instagram",
    imageUrl: "/images/instagram.png",
    imageAlt: "Instagram",
    platform: "Instagram",
    href: "https://www.instagram.com/yesterdaydavis/",
  },
  {
    id: "tiktok",
    imageUrl: "/images/tiktok.png",
    imageAlt: "TikTok",
    platform: "TikTok",
    href: "https://www.tiktok.com/@yesterdaydavis",
  },
  {
    id: "facebook",
    imageUrl: "/images/facebook.png",
    imageAlt: "Facebook",
    platform: "Facebook",
    href: "https://www.facebook.com/p/Yesterday-Davis-61555736068926",
  },
];

const eventsFallbackData = [
  { id: "1", title: "Day in Downtown" },
  { id: "2", title: "In-Store Events" },
];

const iconMap = {
  Instagram: <FaInstagram aria-hidden="true" />,
  TikTok: <FaTiktok aria-hidden="true" />,
  Facebook: <FaFacebook aria-hidden="true" />,
};

async function getSocialImages() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/social-images?_published=true`,
      { cache: "no-store" },
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    return data.body.map((item) => ({
      id: item._id,
      imageUrl: item.image[0].src,
      imageAlt: item.image_alt_text,
      platform: item.platform,
      href: item.href,
    }));
  } catch (e) {
    console.error(`Failed to fetch social-images: ${e.message}`);
    return socialFallbackData;
  }
}

async function getEvents() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/events?_published=true`,
      { cache: "no-store" },
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    return data.body.map((item) => ({
      id: item._id,
      title: item.title,
      date: item.date,
    }));
  } catch (e) {
    console.error(`Failed to fetch events: ${e.message}`);
    return eventsFallbackData;
  }
}

export default async function Page() {
  const socialImages = await getSocialImages();
  const events = await getEvents();

  return (
    <main className={styles.page}>
      <section className={styles["banner-container"]}>
        <div className={styles["banner-desktop"]}>
          <div className={`${styles["banner-item"]} ${styles.top}`}>
            <Image
              src={heroTop}
              alt="A member of the Yesterday team carrying the shop's sandwich board across the cobblestone courtyard downtown"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className={`${styles["banner-item"]} ${styles["bottom-left"]}`}>
            <Image
              src={heroLeft}
              alt="A sculpted white display wall holding glassware, ceramics and shoes"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={`${styles["banner-item"]} ${styles["bottom-right"]}`}>
            <Image
              src={heroRight}
              alt="A packed rack of vintage jackets in corduroy, suede and denim"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className={styles["banner-mobile"]}>
          <img src="/images/mobile_banner.webp" alt="The Yesterday Vintage team outside the shop" />
        </div>
      </section>

      <section className={styles["events-container"]}>
        <div className={styles["event-card"]}>
          <img
            className={styles["event-image-desktop"]}
            src="/images/event.png"
            alt="Event Calendar"
          />
          <img
            className={styles["event-image-mobile"]}
            src="/images/mobile_events.svg"
            alt="Event Calendar"
          />
        </div>

        <div className={styles["event-info"]}>
          <h2 className={styles["event-title"]}>Events</h2>
          <ul className={styles["event-list"]}>
            {events.map((event) => (
              <li key={event.id}>{event.title}</li>
            ))}
          </ul>
          <a href="/events" className={styles["events-btn"]}>
            Events
          </a>
        </div>
      </section>

      <ReviewCarousel />

      <section>
        <div className={styles["social-container"]}>
          <h1 className={styles.title}>
            <span className={styles["title-red"]}>Follow us on social!</span>
          </h1>
          <div className={styles["social-img-container"]}>
            {socialImages.map((social) => (
              <div key={social.id} className={styles["social-card"]}>
                <div className={styles["social-image-frame"]}>
                  <img
                    className={styles["social-image"]}
                    src={social.imageUrl}
                    alt={social.imageAlt}
                  />
                </div>
                <a
                  className={styles["social-btn"]}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles["social-icon"]}>
                    {iconMap[social.platform]}
                  </span>
                  <span className={styles["social-label"]}>
                    {social.platform}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
