import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import SectionTitle from "../UI/SectionTitle/SectionTitle";

import profile from "../../data/profile";

import styles from "./Contact.module.scss";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <SectionTitle
          eyebrow="CONTACT"
          title={profile.contactTitle}
          center
        />

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>{profile.contactMessage}</p>

          <div className={styles.actions}>
            <Button href={`mailto:${profile.email}`}>
              Send Email
            </Button>

            <Button
              href={profile.resume}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </div>

          <div className={styles.socials}>
            <motion.a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              transition={{ duration: 0.2 }}
            >
              <FaEnvelope />
            </motion.a>

            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              transition={{ duration: 0.2 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;