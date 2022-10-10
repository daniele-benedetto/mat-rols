import styles from '../styles/Summary.module.css';
import Button from './Button';
import {motion} from 'framer-motion';

export default function Summary({
  props, 
  breadcrumb,
  path
}) {
  return (
    <div className={styles.col}>
      <motion.h3
        style={{color: (breadcrumb == 'Analogic') ? path[1].fill : path[0].fill}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 , delay: 0.33 }}
        variants={{
          visible: { opacity: 1, x: 0},
          hidden: { opacity: 0, x: -40}
        }}
      >
        {breadcrumb}
      </motion.h3>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 , delay: 0.33 }}
        variants={{
          visible: { opacity: 1, x: 0},
          hidden: { opacity: 0, x: 40}
        }}
      >
        {props.title}
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 , delay: 0.75 }}
        variants={{
          visible: { opacity: 1, y: 0},
          hidden: { opacity: 0, y: 40}
        }}    
      >
        {props.description}
      </motion.p>
      <div className='buttons'>
        <Button 
          content='Contattami'
          color='var(--white)'
          backgroundColor='var(--black)'
          url='www.google.com'
          delay='1.25'
        />
        <Button 
          content='Seguimi su instagram'
          color='var(--white)'
          backgroundColor={(breadcrumb == 'Analogic') ? path[1].fill : path[0].fill} 
          url='www.google.com'
          delay='1.5'
        />
      </div>
    </div>
  );
}
