import React from "react";
import styles from "./ErrorPage.module.css";
import EmptyNavBar from "../../components/EmptyNavBar/EmptyNavBar";

function ErrorPage() {
  return (
    <div>
      <EmptyNavBar />
      <div className={styles.centerContainer}>
        <h1>ErrorPage</h1>
        <h2>Page not found</h2>
      </div>
    </div>
  );
}

export default ErrorPage;
