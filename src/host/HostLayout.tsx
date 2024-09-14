import { Link, Outlet, NavLink } from 'react-router-dom'
import styles from './hostLayout.module.css'

export default function HostLayout() {
    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.links}>
                    <li className={styles.dashboard}><NavLink to="/host" end className={({ isActive }) => isActive ? styles.active : styles.notActive}>Dashboard</NavLink></li>
                    <li className={styles.income}><NavLink to="/host/income" className={({ isActive }) => isActive ? styles.active : styles.notActive}>Income</NavLink></li>
                    <li className={styles.myvans}><NavLink to="/host/myvans" className={({ isActive }) => isActive ? styles.active : styles.notActive}>Vans</NavLink></li>
                    <li className={styles.reviews}><NavLink to="/host/reviews" className={({ isActive }) => isActive ? styles.active : styles.notActive}>Reviews</NavLink></li>
                </ul>            
            </nav>
            <Outlet />
        </>
    )
}