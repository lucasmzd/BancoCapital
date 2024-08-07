import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EmptyNavBar.module.css";
import logo from "../../assets/bancoCapital.png";
import avatar from "../../assets/avatar.png";

export default function EmptyNavBar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoSection}>
          <Link to="/">
              <img src={logo} alt="Banco Capital Logo" />
          </Link>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." aria-label="Search" />
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.avatarSection} onClick={toggleDropdown}>
          <img src={avatar} alt="Avatar" className={styles.avatar} />
          {dropdownVisible && (
              <div className={styles.dropdownMenu}>
              <Link to="/register" className={styles.dropdownItem}>Registrarse</Link>
              <Link to="/login" className={styles.dropdownItem}>Loguearse</Link>
            </div>
          )}
        </div>
    </div>
  </div>
  );
}
