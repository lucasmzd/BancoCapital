import styles from "./CardAppointment.module.css"

const CardAppointments = ({ id, date, time, description, status }) => {

  const handleOnClick = () => {
    alert(`Desea cancelar el turno ${date} de las ${time}?`)
  }
    return (
      <div className={styles.cardContainer}>
        <span>{description}</span>
        <span>{date}</span>
        <span>{time}</span>
        {
          status === "active"
            ? (<span className={styles.active} onClick={handleOnClick}>Activo</span>)
            : (<span className={styles.cancelled}>Cancelado</span>)
        }
      </div>
    );
  };
  
  export default CardAppointments;