import Head from "next/head";
import { useRouter } from 'next/router';
import { useQuery } from "urql";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cursor from '../../components/Cursor';
import Projects from "../../components/Projects";
import Summary from "../../components/Summary";
import styles from '../../styles/Page.module.css';
import {  GET_CATEGORY_QUERY } from "../../data/query";
import { menu, footer, socials, path }  from '../../data/local';
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

  if(fetching) return <p>...</p>;
  if(error) return <p>Error... {error.message}</p>;


  const category = data.categories.data[0].attributes;
  const projects = category.projects.data;
  
  return (
    <div>

      <Head>
        <title>Arlotta Mattia - {category.name}</title>
        <meta name="description" content={`Collection of my photos from the category ${category.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        menu={menu}
      />

      <main className={styles.main}>
        <section className={styles.col}>
          <Summary 
          props={category} 
          breadcrumb={category.name}
          path={path}
        />
          <Projects projects={projects} />
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

