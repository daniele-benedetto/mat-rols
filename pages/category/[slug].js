import { useQuery } from "urql";
import { useRouter } from 'next/router';
import Head from "next/head";
import {  MENUS_QUERY,GET_CATEGORY_QUERY } from "../../data/query";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Social from '../../components/Social';
import Cursor from '../../components/Cursor';
import Posts from "../../components/Posts";
import styles from '../../styles/Page.module.css';

export default function Category(){
    
  const { query } = useRouter();

  const [results] = useQuery({
    query: MENUS_QUERY,
  });

  const [resultsPostsSx] = useQuery(
    {
      query: GET_CATEGORY_QUERY,
      variables: {
        slug: query.slug,
        position: 'sx',
      }
  });

  const [resultsPostsDx] = useQuery(
    {
      query: GET_CATEGORY_QUERY,
      variables: {
        slug: query.slug,
        position: 'dx',
      }
  });

  const { data: dataPS, fetching: fetchingPS, error: errorPS } = resultsPostsSx;
  const { data: dataPD, fetching: fetchingPD, error: errorPD } = resultsPostsDx;
  const { data: data, fetching: fetching, error: error } = results;

  if(fetchingPS) return <p>Loading...</p>;
  if(errorPS) return <p>Error... {error.message}</p>;

  if(fetchingPD) return <p>Loading...</p>;
  if(errorPD) return <p>Error... {error.message}</p>;

  if(fetching) return <p>Loading...</p>;
  if(error) return <p>Error... {error.message}</p>;

  const primaryMenu = data.primaryMenus.data;
  const socials = data.socials.data;
  const footers = data.footers.data;
  const postsSx = dataPS.categories.data[0].attributes.posts.data;
  const postsDx = dataPD.categories.data[0].attributes.posts.data;
  
  return (
    <div>

      <Head>
        <title>Arlotta Mattia - {query.slug}</title>
        <meta name="description" content={`Collection of my photos from the category ${query.slug}`} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,700;0,900;1,400&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <Header
        primaryMenu={primaryMenu}
      />

      <main className={styles.main}>
        <section className={styles.col}>
          <Posts posts={postsSx} />
          <Posts posts={postsDx} />
        </section>
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

};

