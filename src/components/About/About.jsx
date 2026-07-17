import { motion } from "framer-motion";

import Container from "../UI/Container/Container";
import SectionTitle from "../UI/SectionTitle/SectionTitle";

import profile from "../../data/profile";

import styles from "./About.module.scss";

const highlights = [
  {
    title: "Frontend",
    value: "Responsive Interfaces",
  },
  {
    title: "Backend",
    value: "Robust APIs",
  },
  {
    title: "Engineering",
    value: "Clean Code",
  },
  {
    title: "Status",
    value: "Open to Work",
  },
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <SectionTitle
          eyebrow="ABOUT"
          title="Building Software That Makes an Impact"
        />

        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>{profile.about[0]}</p>

            <p>{profile.about[1]}</p>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                className={styles.card}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
              >
                <span className={styles.label}>
                  {item.title}
                </span>

                <h3>{item.value}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;