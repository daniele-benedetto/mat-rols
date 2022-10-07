import styles from '../styles/Summary.module.css';

export default function Summary({categories}) {
  return (
    <div className={styles.col50}>
      <h2>{categories.name}</h2>
    </div>
  );
}
