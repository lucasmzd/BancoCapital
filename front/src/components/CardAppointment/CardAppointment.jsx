import styles from "./CardAppointment.module.css"

const CardAppointments = ({ id, date, time, status }) => {

  const handleOnClick = () => {
    alert(`Desea cancelar el turno ${date} de las ${time}?`)
  }
    return (
      <div className={styles.cardContainer}>
        <span>Fecha: {date}</span>
        <span>Hora: {time}</span>
        {
          status === "active"
            ? (<span className={styles.active} onClick={handleOnClick}>Activo</span>)
            : (<span className={styles.cancelled}>Cancelado</span>)
        }
      </div>
    );
  };
  
  export default CardAppointments;