import styles from './navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <nav className={styles.navbar}>
            <h2 className={styles.logo}><Link to="/">#Vanlife</Link></h2>
            <ul className={styles.links}>
                <li><NavLink to="/Host" className={({ isActive }) => isActive ? styles.active : styles.notActive}>Host</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : styles.notActive}>About</NavLink></li>
                <li><NavLink to="/vans" className={({ isActive }) => isActive ? styles.active : styles.notActive}>Vans</NavLink></li>
            </ul>
        </nav>
    )
}