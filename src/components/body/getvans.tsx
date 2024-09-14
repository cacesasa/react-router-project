import { useState, useEffect } from "react";
import styles from "./van.module.css";
import { Link } from "react-router-dom";


export default function GetVans({data}) {
  const [vans, setVans] = useState([]);
  

  useEffect(() => {
    setVans(data);
  }, []);

  return (    
    <div className={styles.getVans}>
      {vans.map((van) => (
        <div className={styles.van}>
          <Link to={`/vans/${van.id}`}>
            <img className={styles.vanImg} src={van.imageUrl} alt={van.name} />
          </Link>         
            
          <div className={styles.vanInfo}>
            <Link to={`/vans/${van.id}`}><h2 className={styles.vanName}>{van.name}</h2></Link>        
            <Link to={`/vans/${van.id}`}><h3 className={styles.vanPrice}>${van.price}<p className={styles.perDay}>/day</p></h3></Link>             
            <Link to={`/vans/${van.id}`}><p className={styles[van.type]}>{van.type}</p></Link>
          </div>
        </div>
      ))}
    </div>    
  );
}
