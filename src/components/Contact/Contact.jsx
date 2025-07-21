import React from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Contact</h2>
          <h3 className={styles.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
        </div>
        <div className={styles.row}>
          <div className={styles.detailsCol}>
            <div className={styles.formText}>
              <h4>Details</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae nobis, repellendus illo sed. Sed numquam libero, atque
                doloribus voluptate culpa dignissimos hic ratione officiis
                facere possimus exercitationem illo. In, quae.
              </p>
              <p>
                <span className={styles.icon}>📍</span> 1234 Classen Blvd. OK,
                USA
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
          <form className={styles.formCol} autoComplete="off">
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.input}
                placeholder="Your Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                className={styles.input}
                placeholder="Your Email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                className={styles.input}
                placeholder="Your Phone"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                className={styles.input}
                placeholder="Your Message"
                required
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
