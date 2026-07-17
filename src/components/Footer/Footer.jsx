import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

import Container from "../UI/Container/Container";

import profile from "../../data/profile";

import styles from "./Footer.module.scss";

import { HiArrowUp } from "react-icons/hi";


function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h3>
              {profile.firstName}
              <span>.</span>
            </h3>

            <p>{profile.footerTagline}</p>
          </div>

          <div className={styles.right}>
            <motion.a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              whileHover={{ y: -4 }}
            >
              <FaEnvelope />
            </motion.a>

            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -4 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -4 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>

          <motion.a
            href="#home"
            className={styles.scrollTop}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            aria-label="Back to top"
          >
            <HiArrowUp />
          </motion.a>
      
        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>

          <span>Designed and built from the ground up by Hasan Abulaban.</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;