import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Button from './Button';
import {AiOutlineClose} from 'react-icons/ai';
import {BiMenu} from 'react-icons/bi';
import { useState } from 'react';

export default function Header({
  menu
}) {  
  
  const [hamburger,setHamburger] = useState(false);
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>
          <Link href='/'>
            <a>mat<span>.</span>rols<span>.</span></a>
          </Link>
        </h1>
      </div>
      <nav  
        className={styles.menu}
        style={hamburger ? {opacity: 1, zIndex: 5} : {zIndex: 0}}
      >
        <ul>
          {menu.map((item, idx) => {
            return (
              <li  
                key={idx}
              >
                <Link 
                  href={`${item.url}`}
                >
                  <a className={item.button}>
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
          <Button
            content='arlottamattia@gmail.it'
            color='var(--white)'
            backgroundColor='var(--black)'
            url='www.google.com'
          />
        </ul>
        <AiOutlineClose 
          size='25px'
          color={'var(--white)'}
          className={styles.closeInfo}
          onClick={() => setHamburger(false)} 
        />
      </nav>
      <BiMenu 
        size='30px'
        color={'var(--black)'}
        className={styles.closeInfo}
        onClick={() => setHamburger(true)} 
      />
    </header>
  );
}
