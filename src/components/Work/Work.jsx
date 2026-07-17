import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
} from "react-icons/fa";

import Container from "../UI/Container/Container";
import SectionTitle from "../UI/SectionTitle/SectionTitle";

import projects from "../../data/projects";

import styles from "./Work.module.scss";

function Work() {
  return (
    <section
      id="projects"
      className={styles.work}
    >
      <Container>
        <SectionTitle
          eyebrow="PROJECTS"
          title="Featured Projects"
        />

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={styles.project}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              {/* Image */}

              <div className={styles.image}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}

              <div className={styles.content}>
                <span className={styles.number}>
                  {project.id}
                </span>

                <h3>{project.title}</h3>

                {/* Tech Stack */}

                <div className={styles.tech}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={styles.badge}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p>{project.description}</p>

                {/* Highlights */}

                <ul className={styles.highlights}>
                  {project.highlights.map((item) => (
                    <li key={item}>
                      ✓ {item}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}

                <div className={styles.actions}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.buttonText}
                                  
                    {project.buttonText === "View Project" && <FaArrowRight />}
                  </a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    whileHover={{ y: -4 }}
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Work;