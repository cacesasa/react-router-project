import styles from './van.module.css'
import GetVans from './getvans'

export default function Vans() {

    return (
        <section className={styles.vans}>
            <h2 className={styles.title}>Explore our van options</h2>
            <div className={styles.filterButtons}>
                <button className={styles.button}>Simple</button>
                <button className={styles.button}>Luxury</button>
                <button className={styles.button}>Rugged</button>
                <p className={styles.clear}>Clear filters</p>
            </div>
            <div className={styles.vanList}>
                <GetVans />
            </div>
        </section>
    )
}