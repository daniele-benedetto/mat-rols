import React, { useRef, useEffect, useState } from "react";
import Link from 'next/link';
import styles from '../styles/Hero.module.css';
import { path } from "../data/local";

export default function Hero({
  title, 
  textLeft, 
  textRight, 
  category, 
  image,
  addLinkEvents
}) {

  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);

  addLinkEvents(setLinkHover);
  
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
      <svg viewBox="0 0 200 200">
        <path 
          fill={linkHover ? path[0].fill : path[1].fill} 
          d={linkHover ? path[0].d : path[1].d} 
          transform="translate(100 100)" 
        />
      </svg>
    </section>
  );
}