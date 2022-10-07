import Head from "next/head";
import { useRouter } from 'next/router';
import { useQuery } from "urql";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cursor from '../../components/Cursor';
import Posts from "../../components/Posts";
import Summary from "../../components/Summary";
import styles from '../../styles/Page.module.css';
import {  GET_CATEGORY_QUERY } from "../../data/query";
import { menu, footer, socials }  from '../../data/local';
import {addLinkEvents, addEventListeners, removeEventListeners} from '../../util/mouseAction';

export default function Category(){
    
  const { query } = useRouter();

  const [results] = useQuery(
    {
      query: GET_CATEGORY_QUERY,
      variables: {
        slug: query.slug,
      }
  });

  const { data: data, fetching: fetching, error: error } = results;

  if(fetching) return <p>Loading...</p>;
  if(error) return <p>Error... {error.message} Error2... {error2.message}</p>;

  const cateogiries = data.categories.data[0].attributes.categories.data;
  
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
          <Summary posts={cateogiries} />
          <Posts posts={cateogiries} />
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

