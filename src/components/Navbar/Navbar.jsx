import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import useActiveSection from "../../hooks/useActiveSection";

import styles from "./Navbar.module.scss";
import resume from "../../assets/documents/Hasan-Abulaban-Resume.pdf";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const activeSection = useActiveSection();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar glass effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu with Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = menuOpen
      ? "hidden"
      : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.navbar} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.container}>
          <a href="#home" className={styles.logo}>
            HA<span>.</span>
          </a>

          <nav className={styles.desktopNav}>
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={
                      activeSection === link.id
                        ? styles.active
                        : ""
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Resume
          </a>

          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.open : ""
        }`}
      >
        <nav>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;