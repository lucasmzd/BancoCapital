import styles from "./navbar.module.css"
export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div>
                <button>BC</button>
                <h2>Banco Capital</h2>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">About Us</a>
            </div>
            <div>
                <button>Profile Picture</button>
            </div>
            <div>
                <input type="text" placeholder="Search..."/>
                <button>Search</button>
            </div>
        </div>
    )
}