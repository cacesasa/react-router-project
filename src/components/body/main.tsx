import styles from './main.module.css'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <main className={styles.main}>
            <img src="../../../src/assets/images/man-on-van.png" alt="Vans Logo" />
            <section className={styles.mainContent}>
                <div className={styles.heading}>
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                </div>
                <div className={styles.description}>
                    <p>
                        Our mission is to enliven your road trip with the perfect travel van for you.
                        Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
                    </p>
                
                    <p>
                        Our team is full of passionate and driven vanguards who know firsthand the magic
                        of hosting. Treat your van to a worry-free adventure.
                    </p>
                </div>
                <div className={styles.callToAction}>
                    <h2>Your destination is waiting.</h2>
                    <h2>Your van is ready.</h2>
                    <Link to="/vans"><button className={styles.button}>Explore our vans</button></Link>
                </div>
            </section>            
        </main>
    )
}