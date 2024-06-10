import { useState } from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import styles from "./Login.module.css";
import axios from "axios";
import { validateLogin } from "../../helpers/validateLogin";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [itemsFromLogin, setItemsFromLogin] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});


  const handlerInputChangeFromLogin = (evento) => {
    const { name, value } = evento.target;
    setItemsFromLogin({ ...itemsFromLogin, [name]: value });

    const itemsActualizadoFromLogin = { ...itemsFromLogin, [name]: value };
    const newErrors = validateLogin(itemsActualizadoFromLogin);

    if (newErrors[name]) {
      setErrors({ ...errors, [name]: newErrors[name] });
    } else {
      const { [name]: value, ...remainingErrors } = errors;
      setErrors(remainingErrors);
    }
  };