import React from "react";
import Movie from "./Movie";
import movieData from "./data.json";
import styles from "./MovieList.module.css";

const MovieList = () => {
  return (
    <div className={styles.movieList}>
      {movieData.map(movie => (
        <Movie key={movie.Poster} movie={movie}/>
      ))}
    </div>
  );
};

export default MovieList;