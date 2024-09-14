import { Link, useParams } from 'react-router-dom'
import styles from './vanpage.module.css'

export default function VanPage({data}) {
    const params = useParams();
    const details = data.find((van) => van.id === params.id);
    return (
        <div className={styles.vanPage}>
            <Link to={'/vans/'} className={styles.link}>Back to all vans</Link>
            <img className={styles.vanImg} src={details.imageUrl} alt={details.name} />
            <div className={styles.vanInfo}>
                <p className={styles[details.type]}>{details.type}</p>
                <h1 className={styles.vanName}>{details.name}</h1>
                <p className={styles.vanPrice}>${details.price}<span>/day</span></p>
                <p className={styles.description}>{details.description}</p>
            </div>
            <Link className={styles.link} to={`/vans/${details.id}/book`}><button className={styles.button}>Rent this van</button></Link>              

        </div>
    )
}