import { AnimatePresence, motion } from "framer-motion";

import styles from "./Loader.module.scss";

function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
            },
          }}
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            HA<span>.</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.8,
            }}
          >
            Full Stack Developer
          </motion.p>

          <motion.div
            className={styles.line}
            initial={{
              width: 0,
            }}
            animate={{
              width: 140,
            }}
            transition={{
              delay: 0.55,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;