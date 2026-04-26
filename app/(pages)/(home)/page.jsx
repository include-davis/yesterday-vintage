import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import styles from "./home.module.scss";
import ReviewCarousel from "../../_components/review-carousel/page.jsx";

export const dynamic = "force-dynamic";

// test

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
          <div className={`${styles["banner-item"]} ${styles.left}`}>
            <img src="/images/left-banner.png" alt="Picture left" />
          </div>
          <div className={`${styles["banner-item"]} ${styles.center}`}>
            <img src="/images/center-banner.png" alt="Middle picture" />
          </div>
          <div className={`${styles["banner-item"]} ${styles.right}`}>
            <img src="/images/right-banner.png" alt="Picture right" />
          </div>
        </div>

        <div className={styles["banner-mobile"]}>
          <img src="/images/mobile_banner.svg" alt="Mobile banner" />
        </div>
      </section>

      <section className={styles["welcome"]}>
        <div className={styles["welcome-content"]}>
          <h1 className={styles.title}>Welcome!</h1>
          <p className={styles["welcome-text"]}>
            We are a locally owned and operated vintage clothing and accessories
            store located in Davis, California. We carry clothing in sizes XS-3X
            for all genders, spanning from the 60s to the early 2000s. Come stop
            by and say hi!
          </p>
          <a href="/about" className={styles["learn-more-button"]}>
            Learn More
          </a>
        </div>

        <div className={styles["welcome-image"]}>
          <img
            className={styles["welcome-image-desktop"]}
            src="/images/welcome-section.png"
            alt="Welcome Image"
          />
          <div className={styles["welcome-image-mobile-flex"]}>
            <div className={styles["welcome-image-mobile-item"]}>
              <img src="/images/welcome_topleft.png" alt="Welcome top left" />
            </div>
            <div className={styles["welcome-image-mobile-item"]}>
              <img src="/images/welcome_topright.png" alt="Welcome top right" />
            </div>
            <div className={styles["welcome-image-mobile-item"]}>
              <img
                src="/images/welcome_bottomleft.png"
                alt="Welcome bottom left"
              />
            </div>
            <div className={styles["welcome-image-mobile-item"]}>
              <img
                src="/images/welcome_bottomright.png"
                alt="Welcome bottom right"
              />
            </div>
          </div>
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
                <img
                  className={styles["social-image"]}
                  src={social.imageUrl}
                  alt={social.imageAlt}
                />
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
