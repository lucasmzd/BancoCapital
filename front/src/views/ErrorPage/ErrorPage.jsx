import React from "react"; 
import styles from './ErrorPage.module.css'

function ErrorPage() {
    return (
        <div className={styles.centerContainer}>
            <h1>ErrorPage</h1>
            <h2>Page not found</h2>
        </div>
    )
}

export default ErrorPage