import styles from "./events.module.scss";
export default function Events() {

    const events = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        "event 4 text"
    ];

    const events1 = [
        "Day in Downtown",
        "Event 2",
        "Event 3",
        "Event 4"
    ];
    return (
        <div className={styles.mainContainer}>
            <div className={styles.eventsRectangle}>
                <div className={styles.yellowBackground}></div>
                <h1 className={styles.title}>Events</h1>
            </div>
            <div className={styles.calendarSection}>
                <div className={styles.calendarBackground}>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&title=Events&src=Y19iOTU4ZjNlYzY1YmMyYWVkY2JkOWRjZDc2MzVmYTc4ZTA0MjQ5OGJhOGFhNjlkNTljMTk0Y2FkYjAwNDFkNGM1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23e67c73"></iframe>
                </div>

            </div>
            <div className={styles.eventsPlusImage}>
                <section className={styles.upcomingEvents}>
                    <div className={styles.upcomingEventsScroll}>
                        <div className={styles.eventHeader}>
                            <h2> Event List</h2>
                        </div>
                        <div className={styles.eventScroll}>
                            {events.map((text, index) => (
                                <div className={styles.item} key={index}>
                                    <div className={styles.smallRectangle}></div>
                                    <p className={styles.mobileText}>{events1[index]}</p>
                                    <div className={styles.eventInfo}>
                                        <h3>{text}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <img src="/eventsImage.png" alt="eventsImage" className={styles.mainImage} />
            </div>
        </div>

    );
}