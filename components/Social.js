import Link from 'next/link';
import styles from '../styles/Social.module.css';

export default function Social({socialMenu}) {
  return (
    <div className={styles.social}>
      <ul>
        {socialMenu.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href='/'>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
