import styles from '../styles/Modal.module.css';
import {AiOutlineClose} from 'react-icons/ai';

export default function Modal({
  item, 
  setModal
}) {

  const img = document.getElementById(`img${item.attributes.title}`);
  const format = styles.vertical;
  let vertical = true;
  const imgWidth = img.getBoundingClientRect().width;
  const imgHeight = img.getBoundingClientRect().height;
  if(imgWidth > imgHeight) {vertical = false} else {vertical = true}

  return (
    <section onClick={() => setModal(false)} className={styles.modal}>
      <div>
        <img 
          id={`img${item.attributes.title}`} 
          src={item.attributes.image.data.attributes.url} 
          alt={item.attributes.title}
          className={vertical && format}
        />
      </div>
      <AiOutlineClose 
        onClick={() => setModal(false)} 
        size='40px'
        color={'var(--white)'}
      />
    </section>
  );
}