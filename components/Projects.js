import styles from '../styles/Posts.module.css';
import Link from 'next/link';
import {motion} from 'framer-motion';


export default function Projects({
  projects
}) {
  return (
    <div className={styles.col50}>
      {projects.map((item, idx) => {
        return (
          <motion.div 
            key={idx} 
            className={styles.post}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 , delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0},
              hidden: { opacity: 0, y: 40}
            }}
          >
            <Link href={`/project/${item.attributes.slug}`}>
              <a>
                <img 
                  src={item.attributes.image.data.attributes.url}
                />
              </a>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}