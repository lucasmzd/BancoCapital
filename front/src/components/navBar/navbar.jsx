import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/bancoCapital.png";
import avatar from "../../assets/avatar.png";

export default function NavBar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoSection}>
        <img src={logo} alt="Banco Capital Logo" />
      </div>
      <div className={styles.linkSection}>
        <Link to="/home" className={styles.navLink}>HOME</Link>
        <Link to="/appointments" className={styles.navLink}>TURNOS</Link>
        <Link to="/about" className={styles.navLink}>NOSOTROS</Link>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." aria-label="Search" />
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.avatarSection}>
                <img src={avatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}


{/* <div className={styles.avatarSection} onClick={toggleDropdown}>
  <img src={avatar} alt="Avatar" className={styles.avatar} />
  {dropdownVisible && (
      <div className={styles.dropdownMenu}>
      <Link to="/register" className={styles.dropdownItem}>Registrarse</Link>
      <Link to="/login" className={styles.dropdownItem}>Loguearse</Link>
    </div>
  )}
</div> */}