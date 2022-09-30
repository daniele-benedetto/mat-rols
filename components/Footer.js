import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer({footerMenu, text}) {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          {footerMenu.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href='/'>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <p>{text}</p>
    </footer>
  );
}
