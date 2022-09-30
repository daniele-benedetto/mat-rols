import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header({headerMenu}) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>mat<span>.</span>rols<span>.</span></h1>
      </div>
      <nav className={styles.menu}>
        <ul>
          {headerMenu.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href='/'>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
