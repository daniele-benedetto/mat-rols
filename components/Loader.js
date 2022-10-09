import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Loader.module.css';

export default function Loader() {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},1000);
  
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError',  handleComplete)
  
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  });
    
  return loading && (
    <div className={styles.spinnerWrapper}>
      <div class={styles.spinner}>
        <div></div>
        <div></div>
      </div>    
    </div>
  );
}