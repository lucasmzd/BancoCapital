import { BiCalendarCheck , BiCalendarX  } from 'react-icons/bi';
// import styles from '../../view/MyAppointments/MyAppointmentsStyles.module.css';

const CardAppointment = ({ turno: { date, time, status } , handleCancel,id}) => {

    const handleCancel = ()=>{
        window.confirm("¿Estás seguro de que deseas cancelar esta cita?") ? 
          (handleCancel(id),  alert("Cita cancelada")) :
          (alert("Tu cita no fue cancelada"));
      }      

  return (
    <div>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>{status === 'active' ? <BiCalendarCheck  color="green" onClick={handleCancel}/> : (<BiCalendarX  color="red"/>)}</p>
    </div>
  );
};

export default CardAppointment;