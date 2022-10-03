import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer({footers, text}) {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          {footers.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href={`/${item.attributes.slug}`}>{item.attributes.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <p>{text}</p>
    </footer>
  );
}
