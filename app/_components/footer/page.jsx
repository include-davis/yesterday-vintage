"use client";
import styles from "./footer.module.scss";
import { FaInstagram, FaFacebook} from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({name, email, phone}),
    });

    setName("");
    setEmail("");
    setPhone("");
    setSubmitted(true);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div>
          <div>
            <p className={styles.header} >Yesterday Vintage</p>
            <p className={styles.text}>Yesterday is a locally owned and operated vintage clothing and accessories store located in Davis, California. We carry clothing in sizes XS-3X for all genders, spanning from the 60s to the early 2000s. Come stop by and say hi!</p>
          </div>

          <div className={styles.info}>
            <div className={styles.address}>
              <span>218 E St. Davis, California</span>
              <a 
              href="https://www.google.com/maps/place/Yesterday+Vintage/@38.5442178,-121.7433458,17z/data=!3m1!4b1!4m6!3m5!1s0x808529e279134169:0x639a1d77483039ce!8m2!3d38.5442136!4d-121.7407709!16s%2Fg%2F11l322d_hf?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              >
              Get directions here!
              </a>
              <p>Daily Hours:  12:00 PM - 6:00 PM</p>
            </div>

            <div className={styles.socials}>
              <div className={styles.row}>
                <svg
                  className={styles.phone}
                  viewBox="0 0 16 19" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M11.7701 16.001C10.6161 15.9586 7.34581 15.5066 3.92082 12.0824C0.496633 8.65741 0.0454705 5.38788 0.00219731 4.23312C-0.0619111 2.47334 1.28597 0.764049 2.843 0.0965187C3.0305 0.0155551 3.23582 -0.0152702 3.43883 0.00706765C3.64184 0.0294055 3.83555 0.104139 4.00096 0.223934C5.28312 1.15832 6.16782 2.57191 6.9275 3.68339C7.09465 3.92759 7.16612 4.22475 7.12829 4.51824C7.09046 4.81174 6.94597 5.08106 6.72236 5.27489L5.15891 6.43605C5.08338 6.4906 5.03021 6.5707 5.00928 6.66149C4.98835 6.75228 5.00109 6.84758 5.04512 6.92969C5.39932 7.57318 6.02919 8.5316 6.7504 9.25282C7.47162 9.97404 8.47572 10.6456 9.16408 11.0398C9.25039 11.0883 9.35198 11.1018 9.44797 11.0777C9.54396 11.0536 9.62705 10.9935 9.68016 10.91L10.6979 9.36101C10.885 9.11246 11.161 8.94596 11.4681 8.89637C11.7752 8.84677 12.0896 8.91794 12.3455 9.09496C13.473 9.87548 14.7888 10.745 15.752 11.9782C15.8815 12.1448 15.9639 12.3432 15.9906 12.5525C16.0172 12.7619 15.9871 12.9745 15.9035 13.1683C15.2327 14.7333 13.5355 16.066 11.7701 16.001Z" 
                  fill="#212529"/>
                </svg>
                <p className={styles.phoneNum}>(530) 298-1274</p>
              </div>
              <div className={styles.row}>
                <svg 
                  className={styles.mail}
                  viewBox="0 0 20 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 6.99L2 2H18ZM18 14H2V4L10 9L18 4V14Z" 
                  fill="#212529"/>
                </svg>
                <a 
                href="mailto:shop@yesterdaydavis.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.email}
                >
                shop@yesterdaydavis.com
                </a>
              </div>
              <section className={styles.icons}>
                <a 
                href="https://www.instagram.com/yesterdaydavis/"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className={styles.icons}></FaInstagram>
                </a>
                <a 
                href="https://www.tiktok.com/@yesterdaydavis?_r=1&_t=ZP-94B7BmuVim7"
                target="_blank"
                rel="noopener noreferrer">
                <IoLogoTiktok className={styles.icons}></IoLogoTiktok>
                </a>
                <a 
                href="https://www.facebook.com/p/Yesterday-Davis-61555736068926/"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook className={styles.icons}></FaFacebook>
                </a>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.signup}>
          <p className={styles.title}>We Have a Loyalty Program!</p>
          <p className={styles.subtitle}>Want to stay updated with us? Sign up down below!</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              type="email" 
              placeholder="Email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div>
        <p className={styles.copyright}>© 2026 Yesterday Vintage | Designed by #include</p>
      </div>
    </footer>
  );
}
