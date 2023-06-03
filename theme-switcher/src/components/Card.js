import React, { useContext } from 'react';
import styles from './Card.module.css';
import { ThemeContext } from './ThemeContext';
import Button from './Button';

const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.card} ${theme === 'dark' ? styles.dark : ''}`}>
      <h2 className={styles.title}>Card Component</h2>
      <div style={{textAlign : "center"}}>
        <Button/>
      </div>
    </div>
  );
};

export default Card;
