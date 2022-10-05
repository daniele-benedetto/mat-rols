import React, { useRef, useEffect, useState } from "react";
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero({
  title, 
  textLeft, 
  textRight, 
  category, 
  image
}) {

  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);

  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <ul ref={targetRef} style={{ fontSize: dimensions.width / 7 }}>
        {category.map((item, idx) => {
          return (
            <li key={idx} >
              <span>{item.name}</span>
              <Link href={`${item.url}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.col}>
        <p>{textLeft}</p>
        <p>{textRight}</p>
      </div>
      <div className={styles.image}>
        <img src={image} alt={image} />
      </div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#EC3D69" d="M46.1,-80.7C59.4,-72.1,69.7,-59.1,77.8,-44.9C85.9,-30.8,91.9,-15.4,91.8,-0.1C91.7,15.3,85.5,30.5,76.9,43.9C68.4,57.3,57.4,68.9,44.2,76.6C31,84.2,15.5,88,0.4,87.3C-14.7,86.6,-29.3,81.4,-43,74C-56.7,66.6,-69.4,57,-77.9,44.3C-86.3,31.6,-90.6,15.8,-90.9,-0.1C-91.1,-16.1,-87.4,-32.2,-79.1,-45.3C-70.9,-58.4,-58.2,-68.6,-44.2,-76.9C-30.3,-85.1,-15.2,-91.5,0.6,-92.6C16.4,-93.6,32.7,-89.3,46.1,-80.7Z" transform="translate(100 100)" />
      </svg>
    </section>
  );
}