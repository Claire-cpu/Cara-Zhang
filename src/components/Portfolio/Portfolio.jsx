import React from "react";
import styles from "./Portfolio.module.scss";
import img1 from "../../assets/img/portfolio/1.jpg";
import img2 from "../../assets/img/portfolio/2.jpg";
import img3 from "../../assets/img/portfolio/3.jpg";
import img4 from "../../assets/img/portfolio/4.jpg";
import img5 from "../../assets/img/portfolio/5.jpg";
import img6 from "../../assets/img/portfolio/6.jpg";

const projects = [
  { img: img1, name: "Project Name", category: "Category" },
  { img: img2, name: "Project Name", category: "Category" },
  { img: img3, name: "Project Name", category: "Category" },
  { img: img4, name: "Project Name", category: "Category" },
  { img: img5, name: "Project Name", category: "Category" },
  { img: img6, name: "Project Name", category: "Category" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Portfolio</h2>
          <h3 className={styles.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
        </div>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.imgWrap}>
                    <img
                      src={project.img}
                      alt={project.name}
                      className={styles.img}
                    />
                    <div className={styles.hover}>
                      <div className={styles.hoverContent}>
                        <span className={styles.plus}>+</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.caption}>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <div>
                    <h4>Project Details</h4>
                    <p>More info here...</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
