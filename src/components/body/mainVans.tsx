import styles from './mainVans.module.css'
import { Link } from 'react-router-dom'

export default function MainVans() {
    return (
        <main className={styles.main}>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="/vans"><button className={styles.button}>Find your van</button></Link>
        </main>
    )
}