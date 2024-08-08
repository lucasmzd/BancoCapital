import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";
import { setUserData } from "../../redux/userSlice";

const POSTUSERLOGIN_URL = "http://localhost:3000/users/login";

function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const validateUserLogin = ({ username, password }) => {
    const errors = {};
    if (!username) errors.username = "Ingresar usuario.";
    if (!password) errors.password = "Ingresar contraseña.";
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrors(validateUserLogin({ ...user, [name]: value }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(POSTUSERLOGIN_URL, user)
      .then(({ data }) => data)
      .then((data) => {
        dispatch(setUserData(data));
        alert("Usuario logueado con exito");
        setUser(initialState);
        navigate("/home");
      })
      .catch((error) => {
        alert("Credenciales incorrectas");
      });
  };

  const formData = [
    { label: "Username: ", name: "username", type: "text" },
    { label: "Password: ", name: "password", type: "password" },
  ];

  return (
    <div className={styles.centerContainer}>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {formData.map(({ label, name, type }) => (
            <div key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                id={name}
                name={name}
                type={type}
                value={user[name]}
                placeholder={`Ingresar ${label.toLocaleLowerCase()}`}
                onChange={handleChange}
              />
              {errors[name] && <span>{errors[name]}</span>}
            </div>
          ))}
          <button
            type="submit"
            disabled={Object.keys(user).some((e) => !user[e])}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
