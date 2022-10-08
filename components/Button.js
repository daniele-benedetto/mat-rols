import Link from 'next/link';
import styles from '../styles/Button.module.css';

export default function Button({
  content, 
  color, 
  backgroundColor, 
  url
}) {
  return (
    <Link href={url}>
      <a
        style={{
          color: color, 
          backgroundColor: backgroundColor
        }}
        className={styles.button}
      >
        {content}
      </a>
    </Link>
  );
}
