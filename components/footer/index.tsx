import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; <span>$&#123;current_year&#125; </span> João Vitor V. O.
      </p>
    </footer>
  );
};

export default Footer;
