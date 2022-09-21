import React,{useState , useEffect} from 'react';
import styles from "./Card.module.css"
import { Link , useLocation } from 'react-router-dom';


const Card = (props) => {
    const Location = useLocation().pathname;
    useEffect(() => {
        if (Location === props.page ) {
        setFocus(true)
   }
   else{
    setFocus(false)
   }
    }, []);
    const [focus , setFocus] = useState(false)
    
    return (
        <Link to={props.page}>
        <div className={`${styles.card} , ${focus ? styles.focus:styles.unfocus}`} >
            <img style={{width:props.size}} src={props.logo} alt="leaugePhoto" />
             <p className={focus ?styles.focus :styles.unfocus} >{props.league}</p>
        </div>
        </Link>
    );
};

export default Card;