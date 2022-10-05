import React, { useRef, useEffect, useState } from "react";
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero({title, textLeft, textRight, categories, image}) {

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
        {categories.map((item, idx) => {
          return (
            <li key={idx} >
              <span>{item.attributes.name}</span>
              <Link href={`/category/${item.attributes.slug}`}>
                <a>{item.attributes.name}</a>
              </Link>
              <div></div>
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
    </section>
  );
}



          // backgroundImage: `url('${image}')`,
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'center, center',
          // backgroundSize: '80% auto',
