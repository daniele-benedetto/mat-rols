import styles from '../styles/Modal.module.css';
import {AiOutlineClose} from 'react-icons/ai';

export default function Modal({item, setModal}) {

  const image = item.attributes.image.data.attributes.url;
  const title = item.attributes.title;
  const description = item.attributes.description;

  return (
    <section onClick={() => setModal(false)} className={styles.modal}>
      <div>
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <AiOutlineClose 
        onClick={() => setModal(false)} 
        size='40px'
        color={'#fff'}
      />
    </section>
  );
}