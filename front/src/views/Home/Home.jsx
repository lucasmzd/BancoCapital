import React from "react";
import styles from "./Home.module.css";
import Carousel from "../../components/Carousel/Carousel";
export default function Home() {
  return (
    <>
      <Carousel />
      <div className={styles.centerContainer}>
        <h1>Últimas Noticias</h1>
        <h2>Nuevo Servicio de Banca Digital</h2>
        <p>
          Nos complace anunciar el lanzamiento de nuestra nueva plataforma de
          banca digital, que te permitirá gestionar tus finanzas de manera más
          fácil y segura desde cualquier lugar. Con nuestra app móvil
          actualizada, podrás realizar transferencias, pagar servicios, y
          consultar tus estados de cuenta en tiempo real.
        </p>
        <h2>Promoción Especial en Préstamos Personales</h2>
        <p>
          ¡Aprovecha nuestras tasas de interés reducidas en préstamos personales
          hasta el 30 de septiembre! Esta es la oportunidad perfecta para
          financiar tus proyectos con condiciones más accesibles. Visita nuestra
          sección de préstamos para más información o comunícate con tu asesor
          financiero.
        </p>
        <h2>Expansión de Nuestra Red de Cajeros Automáticos</h2>
        <p>
          Con el objetivo de mejorar la comodidad de nuestros clientes, hemos
          ampliado nuestra red de cajeros automáticos. Ahora puedes encontrar
          cajeros de nuestro banco en más de 50 nuevas ubicaciones en todo el
          país. Usa nuestra herramienta de localización para encontrar el cajero
          más cercano a ti.
        </p>
        <h2>Programa de Educación Financiera</h2>
        <p>
          Estamos comprometidos con la educación financiera de nuestros
          clientes. Por eso, lanzamos un nuevo programa de talleres y seminarios
          online gratuitos. Aprende a administrar tu dinero, planificar tu
          jubilación, y mejorar tu salud financiera desde la comodidad de tu
          hogar.
        </p>
      </div>
    </>
  );
}
