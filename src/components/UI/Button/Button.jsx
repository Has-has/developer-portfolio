import styles from "./Button.module.scss";

function Button({
  children,
  href = "#",
  variant = "primary",
  target,
  rel,
  onClick,
  className = "",
}) {
  const classes = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;