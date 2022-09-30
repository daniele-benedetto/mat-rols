import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero({title, textLeft, textRight, primaryMenu}) {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <ul>
        {primaryMenu.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href='/'>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.col}>
        <p>{textLeft}</p>
        <p>{textRight}</p>
      </div>
    </section>
  );
}