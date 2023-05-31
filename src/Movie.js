import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import styles from "./MovieList.module.css";

function Movie(){
    const[movies, setMovies]=useState([]);
    
    useEffect(()=>{
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
        .then((res)=>res.json())
        .then((data)=>{
            setMovies(data.data.movies);//getData        
            console.log(data);
        });
            console.log("API call");
    }, []);
    console.log("UI REFRESH");
    console.log(movies)
     return (
        <div className={styles.container}> 
            {movies.map((movie)=>
            <MovieList key={movie.id} 
             img={movie.medium_cover_image} {...movie} />)}
        </div>
     )
}export default Movie;