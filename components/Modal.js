import styles from '../styles/Modal.module.css';
import {AiOutlineClose} from 'react-icons/ai';
import {HiInformationCircle} from 'react-icons/hi'
import { useState } from 'react';
import Information from './Information';

export default function Modal({
  item, 
  setModal
}) {

  const [information,setInformation] = useState(false);

  const img = document.getElementById(`img${item.attributes.title}`);
  const format = styles.vertical;
  let vertical = true;
  const imgWidth = img.getBoundingClientRect().width;
  const imgHeight = img.getBoundingClientRect().height;
  if(imgWidth > imgHeight) {vertical = false} else {vertical = true}

  return (
    <section className={styles.modal}>
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
        className={styles.close}
      />
      <HiInformationCircle
        onClick={() => setInformation(true)} 
        size='40px'
        color={'var(--white)'}
        className={styles.info}
      />
      <Information
      item={item}
      information={information}
      setInformation={setInformation}
      />
    </section>
  );
}