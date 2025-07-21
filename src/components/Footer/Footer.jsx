import React from "react";
import styles from "./Footer.module.scss";

const socials = [
  { href: "#", label: "Facebook", icon: "📘" },
  { href: "#", label: "Twitter", icon: "🐦" },
  { href: "#", label: "LinkedIn", icon: "💼" },
  { href: "#", label: "Dribbble", icon: "🏀" },
  { href: "#", label: "Instagram", icon: "📸" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.scrollup}>
          <a
            href="#home"
            className={styles.scrollBtn}
            aria-label="Scroll to top"
          >
            ▲
          </a>
        </div>
        <div className={styles.row}>
          <div className={styles.copyright}>
            <span>All rights reserved &copy; Profile 2017</span>
          </div>
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label}>
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
