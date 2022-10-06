import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header({
  menu
}) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>
          <Link href='/'>
            <a>mat<span>.</span>rols<span>.</span></a>
          </Link>
        </h1>
      </div>
      <nav className={styles.menu}>
        <ul>
          {menu.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href={`/category/${item.url}`}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
