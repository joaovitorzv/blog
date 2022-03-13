import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; <span>new Date().getFullYear() </span> by João Vitor Veras O.
      </p>
    </footer>
  );
};

export default Footer;
