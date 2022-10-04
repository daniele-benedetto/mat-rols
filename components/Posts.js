import styles from '../styles/Posts.module.css';

export default function Posts({posts, position}) {

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