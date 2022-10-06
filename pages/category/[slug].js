import Head from "next/head";
import { useRouter } from 'next/router';
import { useQuery } from "urql";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cursor from '../../components/Cursor';
import Posts from "../../components/Posts";
import styles from '../../styles/Page.module.css';
import {  GET_CATEGORY_QUERY } from "../../data/query";
import { menu, footer, socials }  from '../../data/local';
import {addLinkEvents, addEventListeners, removeEventListeners} from '../../util/mouseAction';

export default function Category(){
    
  const { query } = useRouter();

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

  const { data: data, fetching: fetching, error: error } = resultsPostsSx;
  const { data: data2, fetching: fetching2, error: error2 } = resultsPostsDx;

  if(fetching) return <p>Loading...</p>;
  if(error) return <p>Error... {error.message} Error2... {error2.message}</p>;
  if(fetching2) return <p>Loading...</p>;
  if(error2) return <p>Error... {error.message} Error2... {error2.message}</p>;

  const postsSx = data.categories.data[0].attributes.posts.data;
  const postsDx = data2.categories.data[0].attributes.posts.data;
  
  return (
    <div>

      <Head>
        <title>Arlotta Mattia - {query.slug}</title>
        <meta name="description" content={`Collection of my photos from the category ${query.slug}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        menu={menu}
      />

      <main className={styles.main}>
        <section className={styles.col}>
          <Posts posts={postsSx} />
          <Posts posts={postsDx} />
        </section>
      </main>

      <Footer 
        footer={footer}
        socials={socials}
        copyright='Designed and developed by Daniele Benedetto'
      />

      <Cursor 
        addLinkEvents={addLinkEvents}
        addEventListeners={addEventListeners}
        removeEventListeners={removeEventListeners}      
      />

    </div>
  );

};

