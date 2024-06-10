import { useEffect } from "react";
import CardAppointments from "../../components/CardAppointments/CardAppointments.jsx";
import styles from "./MyAppointmentsStyles.module.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "../../redux/userSlice.js";
import CreateAppointment from "../../components/CreateAppointment/CreateAppointment.jsx";

const MyAppointments = () => {
  const dispatch = useDispatch();
  const handleAppointmentCancel = (appointmentID) => {
    axios
      .put(`http://localhost:3000/appointments/cancel/${appointmentID}`)
      .then((response) => response.data)
      .then((data) => {
        axios
          .get(`http://localhost:3000/users/${activeUserID}`)
          .then((res) => dispatch(setAppointments(res.data.appointments)))
          .catch(
            (error) => (
              console.log(error.message),
              console.log(
                `Error al cancelar el turno con id ${appointmentID}, el error es: ${error?.response?.data?.message}`
              )
            )
          );
      }).catch((error) => console.log(error.message));
  };
  const activeUserID = useSelector(
    (state) => state.actualUser.userData.user.id
  );
  const activeUserAppointment = useSelector(
    (state) => state.actualUser.userAppointments
  );
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${activeUserID}`)
      .then((res) => dispatch(setAppointments(res.data.appointments)));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <CreateAppointment></CreateAppointment>
      <div>
        <h2>My Appointments</h2>
        <div className={styles.cards}>
          {activeUserAppointment.length ? (
            activeUserAppointment.map((appointment) => {
              return (
                <CardAppointments
                  key={appointment.id}
                  turno={appointment}
                  id={appointment.id}
                  handleAppointmentCancel={handleAppointmentCancel}
                />
              );
            })
          ) : (
            <h3>No appointments</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default MyAppointments;