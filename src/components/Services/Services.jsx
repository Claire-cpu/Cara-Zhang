import React from "react";
import styles from "./Services.module.scss";

const services = [
  {
    icon: "icon-adjustments",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorem voluptatem deserunt assumenda.",
  },
  {
    icon: "icon-paintbrush",
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorem voluptatem deserunt assumenda.",
  },
  {
    icon: "icon-tools",
    title: "Project Management",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorem voluptatem deserunt assumenda.",
  },
  {
    icon: "icon-piechart",
    title: "Management Software",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorem voluptatem deserunt assumenda.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Services</h2>
          <h3 className={styles.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div className={styles.singleService} key={service.title}>
              <span className={styles.iconPlaceholder}>{service.icon}</span>
              <h4 className={styles.serviceHeading}>{service.title}</h4>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
