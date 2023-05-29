import React from 'react';
import MovieList from "./components/MovieList";
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Film Değerlendirme Uygulaması</h1>
      <MovieList />
    </div>
  );
};

export default App;