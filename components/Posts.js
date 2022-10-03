import { useRouter } from 'next/router';
import { useQuery } from 'urql';
import { GET_CATEGORY_QUERY } from '../data/query';
import styles from '../styles/Posts.module.css';

export default function Posts({position}) {
    
  const { query } = useRouter();

  const [results] = useQuery({
    query: GET_CATEGORY_QUERY,
    variables: {
      slug: query.slug,
      position: position,
    }
  });

  const {data, fetching, error} = results;

  if(fetching) return <p>Loading...</p>;
  if(error) return <p>Error... {error.message}</p>;

  const posts = data.categories.data[0].attributes.posts.data;

  return (
      <div className={styles.col50}>
        {posts.map((item, idx) => {
          return (
            <img key={idx} src={item.attributes.image.data.attributes.url} />
          );
        })}
      </div>
  );
}