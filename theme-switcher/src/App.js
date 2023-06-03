import styles from './App.module.css';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
  return (
      <div className={styles.container}>
        <Card />
        <Button />
      </div>
  );
};

export default App;
