import styles from "./MovieList.module.css";
import {AiFillStar} from "react-icons/ai";
import { getQueriesForElement } from "@testing-library/react";


const MovieList=(props)=>{
    
    return (
        <div className={styles.movie}>
            <img src={props.img} alt={props.title}/>
            <div className={styles.info}>
                <h4>{props.title}</h4>

                <div className={styles.evaluate}> 
                <AiFillStar className={styles.star} color="yellow"/>
                <span className={props.rating>=9 ? styles.changeRed : styles.changeOrange} >{props.rating}</span>
                </div>
            </div>   

            <div className={styles.overview}>
                <h3>Overview:</h3>
                <p>({props.year})</p>
                <p>{props.genres}</p>
                <p>{props.summary}</p>
            </div>
        </div>
        );
}
export default MovieList

