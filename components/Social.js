import Link from 'next/link';
import styles from '../styles/Social.module.css';
import { socials } from '../data/local';

export default function Social() {

    return (
    <div className={styles.social}>
      <ul>
        {socials.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href={`https://${item.url}`}>
                <a target='_blank'>
                  {item.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
