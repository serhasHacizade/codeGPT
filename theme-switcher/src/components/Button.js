import React, { useContext } from 'react';
import styles from './Button.module.css';
import { ThemeContext } from './ThemeContext';

const Button = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles.button} onClick={toggleTheme}>Change Theme</button>
  );
};

export default Button;
