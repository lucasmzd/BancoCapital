// import React from 'react'
// import styles from './About.module.css'

// function About () {
//     return (
//         <div className={styles.centerContainer}>
//             <h1>About</h1>
//         </div>
//     )
// }

// export default About

import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sobre Nosotros</h1>
      <p className={styles.description}>
        Bienvenido a [Nombre del Banco], donde priorizamos su bienestar financiero. 
        Nuestra misión es proporcionar servicios bancarios excepcionales con un toque personal.
      </p>
      <h2 className={styles.subtitle}>Nuestra Historia</h2>
      <p className={styles.text}>
        Establecido en [Año], [Nombre del Banco] ha sido un pilar en la comunidad, 
        ofreciendo soluciones financieras seguras e innovadoras.
      </p>
      <h2 className={styles.subtitle}>Nuestros Valores</h2>
      <ul className={styles.list}>
        <li>Integridad</li>
        <li>Enfoque en el Cliente</li>
        <li>Innovación</li>
        <li>Comunidad</li>
      </ul>
    </div>
  );
};

export default About;
