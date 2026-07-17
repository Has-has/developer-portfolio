import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";

import profileImage from "../../assets/images/hero/profile.webp";
import profile from "../../data/profile";

import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className={styles.headingGroup}>
              <span className={styles.eyebrow}>
                {profile.title.toUpperCase()}
              </span>

              <div className={styles.line}></div>
            </div>

            <h1>
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>

            <p>{profile.tagline}</p>

            <div className={styles.buttons}>
              <Button href="#projects">
                View Projects
              </Button>
            </div>

            <div className={styles.socials}>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageRing}></div>

              <img
                src={profileImage}
                alt={profile.name}
                width={845}
                height={545}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#footer"
          className={styles.scroll}
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          aria-label="Scroll to footer"
        >
          <HiArrowDown />
        </motion.a>
      </Container>
    </section>
  );
}

export default Hero;