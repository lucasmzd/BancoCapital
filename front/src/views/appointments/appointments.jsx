import { useEffect, useState } from 'react'
import axios from "axios";
import CardAppointment from '../../components/CardAppointment/CardAppointment';
import styles from './appointments.module.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice";

const GETUSERBYID_URL = "http://localhost:3000/users/"
const CANCEL_URL = "http://localhost:3000/appointments/cancel/"

export default function Appointments() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(state => state.actualUser.userData.login);
  const id = useSelector(state => state.actualUser.userData.user.id);
  const appointments = useSelector(state => state.actualUser.userAppointments);

  useEffect(() => {
    !login && navigate("/");
  }, [login]);

  useEffect(() => {
    axios
      .get(GETUSERBYID_URL + id)
      .then(response => response.data)
      .then(actualUser => {
        dispatch(setUserAppointments(actualUser.appointments))
      })
      .catch((error) => console.log(error.message));
  }, [id, dispatch]);

  const handleAppointmentCancel = (appointmentId) => {
    axios
      .put(CANCEL_URL + appointmentId)
      .then(response => response.data)
      .then(data => {
        axios
          .get(GETUSERBYID_URL + id)
          .then(response => response.data)
          .then(actualUser => {
            dispatch(setUserAppointments(actualUser.appointments))})
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));
  }

    return (
        <div className={styles.centerContainer}>
          <h2>Mis Turnos:</h2>
          {
            appointments.map(appointment => (
              <CardAppointment
               key={appointment.id}
               id={appointment.id}
               date={appointment.date}
               time={appointment.time}
               description={appointment.description}
               status={appointment.status}
               handleAppointmentCancel={handleAppointmentCancel}
    />
            ))
          }
        </div>
    )
}