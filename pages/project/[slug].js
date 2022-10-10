import Head from "next/head";
import { useRouter } from 'next/router';
import { useQuery } from "urql";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cursor from '../../components/Cursor';
import Posts from "../../components/Posts";
import Summary from "../../components/Summary";
import styles from '../../styles/Page.module.css';
import {  GET_POST_QUERY } from "../../data/query";
import { menu, footer, socials, path }  from '../../data/local';
import {addLinkEvents, addEventListeners, removeEventListeners} from '../../util/mouseAction';

export default function Project(){
    
  const { query } = useRouter();

  const [results] = useQuery(
    {
      query: GET_POST_QUERY,
      variables: {
        slug: query.slug,
      }
  });

  const { data: data, fetching: fetching, error: error } = results;

  if(fetching) return <p>...</p>;
  if(error) return <p>Error... {error.message}</p>;


  const projects = data.projects.data[0].attributes;
  const posts = projects.posts.data;
  
  return (
    <div>

      <Head>
        <title>Arlotta Mattia - {projects.title}</title>
        <meta name="description" content={`This is my single photo ${projects.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        menu={menu}
      />

      <main className={styles.main}>
        <section className={styles.col}>
          <Summary 
          props={projects} 
          breadcrumb={projects.category.data.attributes.name}
          path={path}
          />
          <Posts posts={posts} />
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

