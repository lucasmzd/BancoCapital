import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AppointmentForm.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const POSTAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

function AppointmentForm(props) {

    const navigate = useNavigate();
    const userId = useSelector((state) => state.actualUser?.userData.user.id);
    const login = useSelector((state) => state.actualUser.userData.login);

    useEffect(() => {
        if (!login) {navigate("/")}
    }, [userId, navigate]);

    const initialState = {
        date: "",
        hours: "10",
        minutes: "00",
        description: "",
    };

    const [appointment, setAppointment] = useState(initialState);
    const [errors, setErrors] = useState({date: "Debe ingresar una fecha"});

    const validateAppointment = ({ date, hours, minutes, description }) => {
        const errors = {};
        if (!date) errors.date = "Debe ingresar una fecha.";
        else if (isWeekend(date)) errors.date = "No se puede agendar en fin de semana.";
        if (!hours || !minutes) errors.time = "Debe ingresar una hora.";
        if (!description) errors.description = "Debe ingresar una descripción.";
        else if (description.length < 4) errors.description = "La descripción debe tener al menos 4 caracteres.";
        else if (description.length > 25) errors.description = "La descripción no puede tener más de 25 caracteres.";
        return errors;
    };
    
    const isWeekend = (date) => {
        const day = new Date(date).getDay();
        return day === 5 || day === 6;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        const updateAppointment = { ...appointment, [name]: value };
        setAppointment(updateAppointment);
        setErrors(validateAppointment(updateAppointment));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAppointment = {
            date: appointment.date,
            time: `${appointment.hours}:${appointment.minutes}`,
            description: appointment.description,
            userId,
        }
        axios
            .post(POSTAPPOINTMENT_URL, newAppointment)
            .then(({ data }) => {
                alert(`Creado el turno ${data.description} el dia ${data.date} a las ${data.time}`);
                setAppointment(initialState);
                navigate("/appointments");
            })
            .catch((error) => {
                alert(`Error: ${error.response.data.error}`);
            });
    };

    const validHours = ["10", "11", "12", "13", "14", "15"];
    const validMinutes = ["00","30"];

    function getTomorrow() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split("T")[0];
    }

    function getFourteenDaysAhead() {
        const today = new Date();
        const sevenDaysAhead = new Date(today);
        sevenDaysAhead.setDate(sevenDaysAhead.getDate() + 13);
        return sevenDaysAhead.toISOString().split("T")[0];
    }

    return (
        <div className={styles.centerContainer}>
            <div className={styles.formContainer}>
                <h2>Agendar Turno</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="date">Fecha: </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            min={getTomorrow()}
                            max={getFourteenDaysAhead()}
                            value={appointment.date}
                            onChange={handleChange}
                        />
                        {errors.date && <span style={{color: "red"}}>
                            {errors.date}
                        </span>}
                    </div>
                    <div>
                        <label htmlFor="time">Hora: </label>
                        <select
                            id="hours"
                            name="hours"
                            value={appointment.hours}
                            onChange={handleChange}
                        >
                            {validHours.map((hour) => (
                                <option key={hour} value={hour}>
                                    {hour}
                                </option>
                            ))}
                        </select>
                        <select
                            id="minutes"
                            name="minutes"
                            value={appointment.minutes}
                            onChange={handleChange}
                        >
                            {validMinutes.map((minute) => (
                                <option key={minute} value={minute}>
                                    {minute}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="description">Descripción: </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={appointment.description}
                            placeholder="Ingresar descripción"
                            onChange={handleChange}
                        />
                        {errors.description && (<span style={{color: "red"}}>
                            {errors.description}
                        </span>)}
                    </div>
                    <button type="submit" disabled={Object.keys(errors).length > 0}>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AppointmentForm;
