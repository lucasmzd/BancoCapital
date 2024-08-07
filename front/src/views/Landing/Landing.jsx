import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./Landing.module.css";

function Landing() {
    return (
        <div>
            <Carousel />
            <div className={styles.centerContainer}>
                <h1>Bienvenido</h1>
                <h2>Aún no estás registrado?</h2>
                <Link to="/register">
                    <button>Registrarse</button>
                </Link>

                <Link to="/login">
                    <button>Iniciar Sesion</button>
                </Link>
            </div>
        </div>
    );
}

export default Landing