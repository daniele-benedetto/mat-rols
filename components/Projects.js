import styles from '../styles/Posts.module.css';
import Link from 'next/link';


export default function Projects({
  projects
}) {
  return (
    <div className={styles.col50}>
      {projects.map((item, idx) => {
        return (
          <div key={idx} className={styles.post}>
            <Link href={`/project/${item.attributes.slug}`}>
              <a>
                <img 
                  src={item.attributes.image.data.attributes.url}
                />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}