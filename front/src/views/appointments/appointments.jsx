import { useEffect, useState } from 'react'
import axios from "axios";
import CardAppointment from '../../components/CardAppointment/CardAppointment';

const GETAPPOINTMENTS_URL = "http://localhost:3000/appointments"

export default function Appointments() {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get(GETAPPOINTMENTS_URL)
      .then(response => response.data)
      .then(appointmentsFromDB => setAppointments(appointmentsFromDB))
  }, []);

    return (
        <div>
          {
            appointments.map(appointment => (
              <CardAppointment
               key={appointment.id}
               id={appointment.id}
               date={appointment.date}
               time={appointment.time}
               status={appointment.status}/>
            ))
          }
        </div>
    )
}