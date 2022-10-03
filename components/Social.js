import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Social.module.css';

export default function Social({socials}) {
  return (
    <div className={styles.social}>
      <ul>
        {socials.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href={`https:\\${item.attributes.slug}`}>
                <a target='_blank'>
                  <Image width={30} height={30} src={item.attributes.image.data.attributes.url} />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
