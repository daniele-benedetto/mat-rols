import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Social from '../components/Social';
import Cursor from '../components/Cursor';
import Loader from '../components/Loader';
import styles from '../styles/Page.module.css';
import { HOME_QUERY } from '../data/query';
import { useQuery } from 'urql';

export default function Home() {

  const [results] = useQuery({
    query: HOME_QUERY
  });

  const {data, fetching, error} = results;

  if(fetching) return <p>...</p>;
  if(error) return <p>Error... {error.message}</p>;
    
  const home = data.home.data.attributes;
  const primaryMenu = data.primaryMenus.data;
  const categories = data.categories.data;
  const socials = data.socials.data;
  const footers = data.footers.data;

  return (
    <div>

      <Head>
        <title>Arlotta Mattia - Photograph</title>
        <meta name="description" content="Personal portfolio of the best photos I made" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1b1b1b" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,700;0,900;1,400&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <Header
        primaryMenu={primaryMenu}
      />

      <main className={styles.main}>

          <Hero
            title={home.title}
            textLeft={home.textLeft}
            textRight={home.textRight}
            image={home.image.data.attributes.url}
            categories={categories}
          />

      </main>

      <Footer 
        footers={footers}
        text='Designed and developed by Daniele Benedetto'
      />

      <Social 
        socials={socials}
      />

      <Cursor />

    </div>
  );
}
