import React, { useState } from "react";
import validateUser from "../../helpers/validateUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const POSTUSER_URL = "http://localhost:3000/users/register"

function Register () {

    const initialState= {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        confirmPassword: "",
    }

    const [user, setUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const handleChange = (event) => {
        const { name, value} = event.target;
        setUser({...user, [name]: value});
        setErrors(validateUser({...user, [name]: value}));
    };

    const handleReset = (event) => {
        event.preventDefault();
        setUser(initialState);
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            nDni: Number(user.nDni),
            username: user.username,
            password: user.password,
        }
        axios
            .post(POSTUSER_URL, userData)
            .then(({data}) => {
                alert(data.message);
                setUser(initialState)
                navigate("/login")
            })
            .catch((error) => {
                alert(error.message)
            })
    };

    const formData = [
        { label: "Nombre: ", name: "name", type: "text"},
        { label: "Username: ", name: "username", type: "text"},
        { label: "Password: ", name: "password", type: "password"},
        { label: "Confirmar Password: ", name: "confirmPassword", type: "password"},
        { label: "Email: ", name: "email", type: "text"},
        { label: "Birthdate: ", name: "birthdate", type: "date"},
        { label: "Numero DNI: ", name: "nDni", type: "text"},
    ]

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                {formData.map(({label, name, type}) => (
                    <div key={name}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            id={name}
                            name={name}
                            type={type}
                            value={user[name]}
                            placeholder={`Ingresar ${label.toLocaleLowerCase()}`}
                            onChange={handleChange}/>
                        {errors[name] && (
                            <span>{errors[name]}</span>
                        )}
                    </div>
                ))}
                <button type="submit" disabled={Object.keys(user).some(e => !user[e])}>Registrar</button>
                <button type="reset" onClick={handleReset}>Limpiar</button>
            </form>
        </div>
    )
}

export default Register