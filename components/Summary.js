import styles from '../styles/Summary.module.css';
import Button from './Button';

export default function Summary({
  props, 
  breadcrumb,
  path
}) {
  return (
    <div className={styles.col}>
      <h3
        style={{color: (breadcrumb == 'Analogic') ? path[1].fill : path[0].fill}}
      >
        {breadcrumb}
      </h3>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className='buttons'>
        <Button 
          content='Contattami'
          color='var(--white)'
          backgroundColor='var(--black)'
          url='www.google.com'
        />
        <Button 
          content='Seguimi su instagram'
          color='var(--white)'
          backgroundColor={(breadcrumb == 'Analogic') ? path[1].fill : path[0].fill} 
          url='www.google.com'
        />
      </div>
    </div>
  );
}
