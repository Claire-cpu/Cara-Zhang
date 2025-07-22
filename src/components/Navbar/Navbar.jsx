import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const brandText = "Profile";

export default function Navbar({ scrolledPastHero }) {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(brandText.slice(0, i + 1));
      i++;
      if (i === brandText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <header
      className={`${styles.header}  ${
        scrolledPastHero ? styles["header--past"] : ""
      }`}
    >
      <nav className={styles.navbar}>
        <a href="#home" className={styles.brand}>
          {typed}
          <span className={styles.cursor}>
            {typed.length < brandText.length ? "|" : ""}
          </span>
        </a>
        <button
          className={styles.toggle}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${styles["links__label"]} ${
                  scrolledPastHero ? styles["links__label--past"] : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
