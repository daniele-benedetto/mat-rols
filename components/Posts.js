import styles from '../styles/Posts.module.css';
import Modal from './Modal';
import { useState } from "react";
import {motion} from 'framer-motion';

export default function Posts({
  posts
}) {
  return (
    <div className={styles.col50}>
      {posts.map((item, idx) => {
        const [modal, setModal] = useState(false);
        return (
          <motion.div 
            key={idx} 
            className={styles.post}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.33 }}
            variants={{
              visible: { opacity: 1, y: 0},
              hidden: { opacity: 0, y: 40}
            }}
          >
            <a>
              <img 
                id={`img${item.attributes.title}`}
                className='image'
                src={item.attributes.image.data.attributes.url}
                onClick={() => setModal(true)}
              />
            </a>
            {modal && 
              <Modal 
                item={item} 
                setModal={setModal}
              />
            }
          </motion.div>
        );
      })}
    </div>
  );
}