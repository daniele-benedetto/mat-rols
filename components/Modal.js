import styles from '../styles/Modal.module.css';

export default function Modal({item, setModal}) {

  const image = item.attributes.image.data.attributes.url;
  const title = item.attributes.title;
  const description = item.attributes.description;

  return (
    <div onClick={() => setModal(false)} className={styles.modal}>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <span onClick={() => setModal(false)}>
        X
      </span>
    </div>
  );
}