import Link from 'next/link';
import styles from '../styles/Button.module.css';
import {motion} from 'framer-motion';

export default function Button({
  content, 
  color, 
  backgroundColor, 
  url,
  delay
}) {
  return (
    <Link href={url}>
      <motion.a
        style={{
          color: color, 
          backgroundColor: backgroundColor
        }}
        className={styles.button}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 , delay: delay }}
        variants={{
          visible: { opacity: 1},
          hidden: { opacity: 0}
        }}   
      >
        {content}
      </motion.a>
    </Link>
  );
}
