import React from "react";
import styles from "./About.module.scss";
import meImg from "../../assets/img/me.jpg";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imgCol}>
          <img src={meImg} alt="Profile" className={styles.imgMe} />
        </div>
        <div className={styles.textCol}>
          <h2 className={styles.heading}>About me</h2>
          <h3 className={styles.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
          <h3 className={styles.name}>John Doe</h3>
          <h4 className={styles.role}>Front end Developer</h4>
          <p className={styles.desc}>
            I am a passionate web developer with a love for building beautiful
            and functional websites. I have 4 years of experience and am always
            eager to learn new technologies and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
