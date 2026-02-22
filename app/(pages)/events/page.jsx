import styles from "./events.module.scss";
import { Fraunces } from "next/font/google";
  export default function Events() {
      return (
      <div>
    <div className={styles.eventsRectangle}>
      <div className={styles.yellowBackground}></div>
      <h1 className={styles.title}>Events</h1>
      </div>
              <div className={styles.calendarSection}>
                  <div className={styles.calendarBackground}></div>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&title=Events&src=Y19iOTU4ZjNlYzY1YmMyYWVkY2JkOWRjZDc2MzVmYTc4ZTA0MjQ5OGJhOGFhNjlkNTljMTk0Y2FkYjAwNDFkNGM1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23e67c73"
                      style={{ border: "solid 1px #777" }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
              </div>
        <div className={styles.eventsPlusImage}>
              <section className={styles.upcomingEvents}>
                  <div className={styles.eventHeader}>
                      <h2> Event List</h2>
                  </div>
                  <div className={styles.smallRectangle}></div>
                  <div className={styles.eventInfo}>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h3>
                  </div>
                  <div className={styles.smallRectangle}></div>
                  <div className={styles.eventInfo}>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h3>
                  </div>
                  <div className={styles.smallRectangle}></div>
                  <div className={styles.eventInfo}>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h3>
                  </div>
              </section>
         <img src="/eventsImage.png" alt="eventsImage" className ={styles.mainImage}/>
        </div>
    </div>
      
  );
}