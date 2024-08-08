import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Banco Capital. Todos los derechos
          reservados.
        </p>
        <ul className={styles.links}>
          <li>
            <a href="#">Política de Privacidad</a>
          </li>
          <li>
            <a href="#">Términos de Servicio</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
