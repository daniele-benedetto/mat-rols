import '../styles/globals.css';
import { motion } from "framer-motion";
import { createClient, Provider } from 'urql';

const client = createClient({
    url: "http://localhost:1337/graphql",
});

function MyApp({ Component, pageProps, router }) {
  return(
    <Provider value={client}>
      <motion.div
      key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
            y: 30
          },
          animate: {
            y: 0,
            opacity: 1,
            transition:{
              delay: 0.5,
              x: { duration: 5 },
              animate: { y: 0 },
              default: { ease: "linear" }
            }
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Provider>
  );
}

export default MyApp;
