import { motion } from "framer-motion";
import styles from "./SectionTitle.module.scss";

function SectionTitle({ eyebrow, title, center = false }) {
  return (
    <motion.div
      className={`${styles.sectionTitle} ${
        center ? styles.center : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span>{eyebrow}</span>

      <h2>{title}</h2>
    </motion.div>
  );
}

export default SectionTitle;