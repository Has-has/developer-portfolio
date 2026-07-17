import styles from "./Button.module.scss";

function Button({
  children,
  href = "#",
  variant = "primary",
  target,
  rel,
  onClick,
}) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;