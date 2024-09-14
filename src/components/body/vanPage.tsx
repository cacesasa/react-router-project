import { Link } from 'react-router-dom'
import styles from './vanpage.module.css'

export default function VanPage({data}) {
    return (
        <div className={styles.vanPage}>
            <Link to={'/vans/'}>Back to all vans</Link>
            <img className={styles.vanImg} src={data[0].imageUrl} alt={data[0].name} />
            <p className={styles.type}>{data[0].type}</p>
            <h1 className={styles.vanName}>{data[0].name}</h1>
            <p className={styles.vanPrice}>${data[0].price}<span>/day</span></p>
            <p className={styles.description}>{data[0].description}</p>
            <Link className={styles.link} to={`/vans/${data[0].id}/book`}>Book now</Link>              

        </div>
    )
}