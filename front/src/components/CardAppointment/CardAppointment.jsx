import styles from "./CardAppointment.module.css";

const CardAppointments = ({ id, date, time, description, status, handleAppointmentCancel }) => {

  const handleOnClick = () => {
    if (
      window.confirm(
        `Desea cancelar "${description}" el día ${date} a las ${time}?`
      )
    ) {
      handleAppointmentCancel(id);
    }
  };
  return (
    <div className={styles.cardContainer}>
      <span>{description}</span>
      <span>{date}</span>
      <span>{time}</span>
      {status === "active" ? (
        <span className={styles.active} onClick={handleOnClick}>
          Activo
        </span>
      ) : (
        <span className={styles.cancelled}>Cancelado</span>
      )}
    </div>
  );
};

export default CardAppointments;
