import styles from "./events.module.scss";

const eventsFallbackData = [
  {
    id: "1",
    title: "Day in Downtown",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    id: "2",
    title: "Event 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    id: "3",
    title: "Event 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    id: "4",
    title: "Event 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
];

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
      description: item.description ?? "",
    }));
  } catch (e) {
    console.error(`Failed to fetch events: ${e.message}`);
    return eventsFallbackData;
  }
}

export default async function Events() {
  const events = await getEvents();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.calendarSection}>
        <div className={styles.calendarBackground}>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&title=Events&src=Y19iOTU4ZjNlYzY1YmMyYWVkY2JkOWRjZDc2MzVmYTc4ZTA0MjQ5OGJhOGFhNjlkNTljMTk0Y2FkYjAwNDFkNGM1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23e67c73"></iframe>
        </div>
      </div>

      <div className={styles.eventsPlusImage}>
        <section className={styles.upcomingEvents}>
          <div className={styles.upcomingEventsScroll}>
            <div className={styles.eventHeader}>
              <h2>Event List</h2>
            </div>
            <div className={styles.eventScroll}>
              {events.map((event) => (
                <div className={styles.item} key={event.id}>
                  <div className={styles.smallRectangle}>
                    <p>{event.title}</p>
                  </div>
                  <div className={styles.eventInfo}>
                    <h3
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <img
          src="/eventsImage.png"
          alt="eventsImage"
          className={styles.mainImage}
        />
      </div>
    </div>
  );
}
