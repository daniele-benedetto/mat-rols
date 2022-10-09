import { useQuery } from 'urql';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import styles from '../styles/Page.module.css';
import { HOME_QUERY } from '../data/query';
import { menu, footer, category, path}  from '../data/local';
import { addLinkEvents, addEventListeners, removeEventListeners, addPathEvent } from '../util/mouseAction';

export default function Home() {

  const [results] = useQuery({
    query: HOME_QUERY
  });

  const {data, fetching, error} = results;

  if(fetching) return <p>...</p>;
  if(error) return <p>Error... {error.message}</p>;
    
  const home = data.home.data.attributes;

  return (
    <div>

      <Head>
        <title>Arlotta Mattia - Photograph</title>
        <meta name="description" content="Personal portfolio of the best photos I made" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="var(--black)" />
        <link rel="preload" fetchpriority="high" as="image" href={home.image.data.attributes.url} type="image/webp" />
      </Head>

      <Header
        menu={menu}
      />

      <main className={styles.main}>

          <Hero
            title={home.title}
            textLeft={home.textLeft}
            textRight={home.textRight}
            image={home.image.data.attributes.url}
            addLinkEvents={addLinkEvents}
            category={category}
            path={path}
          />

      </main>

      <Footer 
        footer={footer}
        copyright='Designed and developed by Daniele Benedetto'
      />

      <Cursor
        addLinkEvents={addLinkEvents}
        addEventListeners={addEventListeners}
        removeEventListeners={removeEventListeners}
      />

    </div>
  );
}
