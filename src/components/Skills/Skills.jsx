import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.scss";
import skillsImg from "../../assets/img/skills.png";

const skillsData = [
  {
    name: "HTML5",
    percent: 85,
    desc: "Lorem ipsum dolor sit amet consectetur elit sed",
  },
  {
    name: "CSS3",
    percent: 80,
    desc: "Lorem ipsum dolor sit amet consectetur elit sed",
  },
  {
    name: "Javascript",
    percent: 60,
    desc: "Lorem ipsum dolor sit amet consectetur elit sed",
  },
  {
    name: "PHP / MySQL",
    percent: 40,
    desc: "Lorem ipsum dolor sit amet consectetur elit sed",
  },
  {
    name: "Photoshop",
    percent: 70,
    desc: "Lorem ipsum dolor sit amet consectetur elit sed",
  },
  {
    name: "Illustrator",
    percent: 50,
    desc: "Lorem ipsum dolor sit amet consectetur elit sed",
  },
];

function SkillChart({ percent }) {
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const size = 152;
    const lineWidth = 10;
    const radius = (size - lineWidth) / 2;
    let current = 0;
    ctx.clearRect(0, 0, size, size);
    ctx.lineCap = "round";
    ctx.strokeStyle = "#109af7";
    ctx.lineWidth = lineWidth;
    function animate() {
      ctx.clearRect(0, 0, size, size);
      ctx.beginPath();
      ctx.arc(
        size / 2,
        size / 2,
        radius,
        -Math.PI / 2,
        -Math.PI / 2 + 2 * Math.PI * (current / 100),
        false
      );
      ctx.stroke();
      if (current < percent) {
        current += 2;
        requestAnimationFrame(animate);
      }
    }
    animate();
  }, [percent]);
  return (
    <canvas
      ref={ref}
      width={152}
      height={152}
      className={styles.chartCanvas}
      aria-label={`Skill percent: ${percent}%`}
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Skills</h2>
          <h3 className={styles.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
        </div>
        <div className={styles.skillsGrid}>
          {skillsData.map((skill) => (
            <div className={styles.skillArea} key={skill.name}>
              <div
                className={styles.skillBg}
                style={{ backgroundImage: `url(${skillsImg})` }}
              >
                <span className={styles.chart}>
                  <span className={styles.percent}>
                    {skill.percent}
                    <span className={styles.percentSign}>%</span>
                  </span>
                  <SkillChart percent={skill.percent} />
                </span>
              </div>
              <h4 className={styles.skillName}>{skill.name}</h4>
              <p className={styles.skillDesc}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
