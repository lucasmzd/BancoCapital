import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div>
            <h1>Bienvenido</h1>
            <h2>Aún no estás registrado?</h2>
            <Link to="/register">
                <button>Registrarse</button>
            </Link>

            <Link to="/login">
                <button>Iniciar Sesion</button>
            </Link>

        </div>
    );
}

export default Landing