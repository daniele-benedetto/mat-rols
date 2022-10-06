import { useEffect, useState } from 'react';
import styles from '../styles/Cursor.module.css';
import { ImArrowUpRight2 } from 'react-icons/im';

export default function Cursor({
  addLinkEvents, 
  addEventListeners, 
  removeEventListeners
}) {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
    
  useEffect(() => {

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };
  
    const mEnter = () => {
      setHidden(false);
    };

    const mLeave = () => {
      setHidden(true);
    };
  
    addEventListeners(mMove, mEnter, mLeave);
    addLinkEvents(setLinkHover);

    return () => removeEventListeners(mMove, mEnter, mLeave);
  }, []);

  return (
    <div
      className= {`
        ${styles.cursor} 
        ${hidden ? styles.cursorhidden :''}
        ${linkHover ? styles.cursorhover : ''}
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {linkHover ? <ImArrowUpRight2 size={24} /> : ''}
    </div>
  );
}
