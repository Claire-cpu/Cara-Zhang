import React from "react";
import styles from "./Contact.module.scss";
import image from "../../assets/img/avatar-toned.jpg";
import Typewriter from "../Typewriter/Typewriter";
export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.bgImage}></div>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Typewriter text="Let's Connect" />
          </h2>
          {/* <h3 className={styles.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3> */}
        </div>
        <div className={styles.row}>
          <div className={styles.detailsCol}>
            <div className={styles.formText}>
              <h4 className={styles.detailsTitle}>Details</h4>
              <div className={styles.detailsUnderline}></div>
              <p className={styles.detailsDesc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae nobis, repellendus illo sed. Sed numquam libero, atque
                doloribus voluptate culpa dignissimos hic ratione officiis
                facere possimus exercitationem illo. In, quae.
              </p>

              <p>
                <span className={styles.icon}>📱</span> 1-123-456-1234
              </p>
              <p>
                <span className={styles.icon}>✉️</span> example@websitename.com
              </p>
              <p>
                <span className={styles.icon}>🔗</span> www.websitename.com
              </p>
            </div>
          </div>
          <div className={styles["img_container"]}>
            <img src={image} className={styles["img_container__img"]} />
          </div>
          {/* <form className={styles.formCol} autoComplete="off">
            <input
              type="text"
              className={styles.input}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className={styles.input}
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              className={styles.input}
              placeholder="Your Phone"
              required
            />
            <textarea
              className={styles.input}
              placeholder="Your Message"
              required
              rows={4}
            ></textarea>
            <button type="submit" className={styles.submitBtn}>
              SEND MESSAGE
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}
