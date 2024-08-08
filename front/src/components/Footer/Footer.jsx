import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} [Nombre del Banco]. Todos los derechos reservados.
        </p>
        <ul className={styles.links}>
          <li><a href="/privacy-policy">Política de Privacidad</a></li>
          <li><a href="/terms-of-service">Términos de Servicio</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
