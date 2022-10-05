import styles from '../styles/Posts.module.css';
import Modal from './Modal';
import { useState } from "react";


export default function Posts({posts}) {
  return (
    <div className={styles.col50}>
      {posts.map((item, idx) => {
        const [modal, setModal] = useState(false);
        return (
          <div className={styles.post}>
            <img 
              key={idx} 
              src={item.attributes.image.data.attributes.url}
              onClick={() => setModal(true)}
            />
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