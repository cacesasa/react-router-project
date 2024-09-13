import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar() {

    return (
        <nav className={styles.navbar}>
            <h2 className={styles.logo}><Link to="/">#Vanlife</Link></h2>
            <ul className={styles.links}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/vans">Vans</Link></li>
            </ul>
        </nav>
    )
}