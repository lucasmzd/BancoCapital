import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAppointments } from "../../redux/userSlice.js";
import { convertDate } from "../../helpers/validateMisTurnos.js";
import { validateMisTurnos } from "../../helpers/validateMisTurnos.js";

const AddAppointment = () => {
  const userId = useSelector((state) => state.actualUser.userData.user.id);
  const dispatch = useDispatch();
  const [appointmentData, setAppointmentData] = useState({
    time: "",
    date: "",
  });
  const [errors, setErrors] = useState({
    time: "La hora es obligatoria",
    date: "La fecha es obligatoria",
  });

  const handleInputChange = (evento) => {
    const { name, value } = evento.target;

    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });

    const updatedAppointmentData = {
      ...appointmentData,
      [name]: value,
    };
    const newErrors = validateMisTurnos(updatedAppointmentData);

    if (newErrors[name]) {
      setErrors({ ...errors, [name]: newErrors[name] });
    } else {
      const { [name]: value, ...remainingErrors } = errors;
      setErrors(remainingErrors);
    }
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const newErrors = validateMisTurnos(appointmentData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return alert("Completa el formulario correctamente");
    }
    try {
      const response = await axios.post("http://localhost:3000/appointments/schedule",
        {
          date: convertDate(appointmentData.date),
          time: appointmentData.time,
          userId: userId,
        }
      );
      alert(
        `El turno se creó exitosamente.: 
        - FECHA: ${response.data.date} 
        - HORA: ${response.data.time}`
      );
      axios.get(`http://localhost:3000/users/${userId}`)
      .then((res) => {dispatch(setAppointments(res.data.appointments));
      });
    } catch (error) {
      console.error("Error al enviar el formulario de turno:", error);
      alert("Error al enviar el formulario, hora o fecha incorrecta");
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((res) => dispatch(setAppointments(res.data.appointments)));
  }, []);

  return (
    <div>
      <div>
        <div>
          <p>New Appointment</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Date</label>
              <input
                value={appointmentData.date}
                type="date"
                name="date"
                min={new Date().toISOString().split("T")[0]}
                placeholder=""
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Time</label>
              <input
                value={appointmentData.nDni}
                type="time"
                name="time"
                placeholder=""
                onChange={handleInputChange}
                step="900"
                min="08:00"
                max="20:00"
              />
            </div>

            <button>Reserve</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;