import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Social from './Social';

export default function Footer({
  footer, 
  copyright
}) {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          {footer.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href={`/${item.url}`}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Social/>
      <p>{copyright}</p>
    </footer>
  );
}
