import React, { useState } from 'react';
import styles from './Movie.module.css';

const Movie = ({ movie }) => {
  const imagesCount = movie.Images.length;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesCount - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesCount - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.movie}>
      <div className={styles.imageContainer}>
        <img src={movie.Images[currentImageIndex]} alt={currentImageIndex} />
        {movie.Images && (
          <>
            <div className={styles.overlay}>
              <div className={styles.overlayButton} onClick={prevImage}>
                &#8249;
              </div>
              <div className={styles.overlayButton} onClick={nextImage}>
                &#8250;
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.movieInfo}>
        <h3>{movie.Title}</h3>
        <div>
          <p><span className={styles.span}>Director:</span>{movie.Director}</p>
          <p><span className={styles.span}>Actors:</span>{movie.Actors}</p>
          <p><span className={styles.span}>Year:</span>{movie.Year}</p>
          <p><span className={styles.span}>IMDb Rating</span>{movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
