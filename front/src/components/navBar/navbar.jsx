import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/bancoCapital.png";
import avatar from "../../assets/avatar.png";
import { useSelector } from "react-redux";

export default function NavBar() {
  const login = useSelector((state) => state.actualUser.userData.login);

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoSection}>
        <img src={logo} alt="Banco Capital Logo" />
      </div>
      <div className={styles.linkSection}>
        <Link to="/home" className={styles.navLink}>
          HOME
        </Link>
        {login && (
          <>
            <Link to="/appointments" className={styles.navLink}>
              TURNO
            </Link>
            <Link to="/appointments/schedule" className={styles.navLink}>
              NUEVO TURNO
            </Link>
          </>
        )}
        <Link to="/about" className={styles.navLink}>
          NOSOTROS
        </Link>
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
