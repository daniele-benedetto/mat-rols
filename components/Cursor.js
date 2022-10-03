import { useRef, useEffect } from 'react';
import styles from '../styles/Cursor.module.css';
import { ImArrowUpRight2 } from 'react-icons/im';

export default function Cursor() {

  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      if (cursorRef.current == null) {
        return;
      }
      cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
    });
  }, []);

  return (
    <div className={styles.cursor} ref={cursorRef}>
      <ImArrowUpRight2 color='#1b1b1b' size={24} />
    </div>
  );

  }