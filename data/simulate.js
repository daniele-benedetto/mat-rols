import Baw from '../public/baw.jpg';
import Color from '../public/color.jpg';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

export const primaryMenu = [
    {
      name: 'Digital',
      link: '/',
      image: Color,
    },
    {
      name: '& Analogic',
      link: '/',
      image: Baw,
    }
  ];

  export const headerMenu = [
    {
      name: 'Digital',
      link: '/',
    },
    {
      name: 'Analogic',
      link: '/',
    },
    {
      name: 'About',
      link: '/',
    },
  ];

  export const footerMenu = [
    {
      name: 'Privacy',
      link: '/',
    },
    {
      name: 'Cookie',
      link: '/',
    },
    {
      name: 'Credits',
      link: '/',
    },
  ];

  export const socialMenu = [
    {
      name: < FaFacebookF color='#1b1b1b' size={24} />,
      link: '/',
    },
    {
      name: < GrInstagram color='#1b1b1b' size={24} />,
      link: '/',
    },
    {
      name: <FaLinkedinIn color='#1b1b1b' size={24} />,
      link: '/',
    },
  ];