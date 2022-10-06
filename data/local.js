import {FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {ImFacebook} from 'react-icons/im';
import styles from '../styles/Header.module.css';

export const socials = [
  {
    name: <ImFacebook />,
    url: 'www.google.com',
  },
  {
    name: <BsInstagram />,
    url: 'www.google.com',
  },
  {
    name: < FaLinkedinIn />,
    url: 'www.google.com',
  }
];

export const footer = [
  {
    name:'Privacy',
    url: '/',
  },
  {
    name: 'Cookie',
    url: '/',
  },
  {
    name: 'Credits',
    url: '/',
  }
];

export const menu = [
  {
    name:'Digital',
    url: '/category/digital/',
  },
  {
    name: 'Analogic',
    url: '/category/analogic/',
  },
  {
    name: 'About',
    url: '/',
  },
  {
    name: 'arlottamattia@gmail.it',
    url: 'mailto:arlottamattia@gmail.it',
    button: styles.button,
  }
];

export const category = [
  {
    name: '& Analogic',
    url: '/category/analogic'
  },
  {
    name: 'Digital',
    url: '/category/digital'
  },
]

export const path = [
  {
    fill: '#EC3D69',
    d: 'M46.6,-72.9C61.1,-63.2,74,-51.5,80.6,-36.9C87.1,-22.3,87.2,-4.9,82.7,10.4C78.1,25.6,69,38.7,58.5,50.4C48,62.1,36.1,72.5,22.9,75.1C9.6,77.7,-5.1,72.7,-19.3,67.7C-33.5,62.6,-47.1,57.6,-58.7,48.5C-70.3,39.3,-79.8,26.1,-82.8,11.3C-85.9,-3.4,-82.4,-19.7,-73.1,-30.7C-63.9,-41.6,-49,-47.3,-35.8,-57.6C-22.7,-67.8,-11.3,-82.8,2.4,-86.4C16.1,-90.1,32.1,-82.5,46.6,-72.9Z'
  },
  {
    fill: '#F75F34',
    d: 'M46.5,-73.4C57.7,-65.2,62.3,-47.9,69.2,-31.9C76.1,-15.9,85.3,-1.1,86.7,14.9C88.1,30.9,81.8,48.1,70.3,60.3C58.8,72.5,42.1,79.5,26,80.5C9.9,81.6,-5.6,76.6,-18.4,69.6C-31.2,62.6,-41.3,53.6,-54,44C-66.7,34.4,-81.9,24.2,-85.6,11.1C-89.3,-1.9,-81.5,-17.8,-72.7,-31.7C-64,-45.7,-54.4,-57.7,-42.2,-65.4C-29.9,-73,-14.9,-76.2,1.4,-78.3C17.7,-80.5,35.4,-81.5,46.5,-73.4Z'  
  },
];