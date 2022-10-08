import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Button from './Button';

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
              <li  
                key={idx}
              >
                <Link 
                  href={`${item.url}`}
                >
                  <a className={item.button}>
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
          <Button
            content='arlottamattia@gmail.it'
            color='var(--white)'
            backgroundColor='var(--black)'
            url='www.google.com'
          />
        </ul>
      </nav>
    </header>
  );
}
