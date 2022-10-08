import styles from '../styles/Posts.module.css';
import Modal from './Modal';
import { useState } from "react";

export default function Posts({
  posts
}) {
  return (
    <div className={styles.col50}>
      {posts.map((item, idx) => {
        const [modal, setModal] = useState(false);
        return (
          <div key={idx} className={styles.post}>
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
          </div>
        );
      })}
    </div>
  );
}