import styles from '../styles/Information.module.css';
import {AiOutlineClose} from 'react-icons/ai';

export default function Information({
  item,
  setInformation,
  information
}) {
  return (
    <div 
      style={information ? {opacity: 1, bottom: 40} : {opacity: 0, bottom: 20}} 
      className={styles.information}
    >
      <div>
        <h4>{item.attributes.title}</h4>
        <p>{item.attributes.description}</p>
        <AiOutlineClose 
          size='20px'
          color={'var(--black)'}
          className={styles.closeInfo}
          onClick={() => setInformation(false)} 
        />
      </div>
    </div>
  );
}