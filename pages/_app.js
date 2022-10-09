import '../styles/globals.css';
import { createClient, Provider } from 'urql';
import Loader from '../components/Loader';

const client = createClient({
    url: "http://localhost:1337/graphql",
});

function MyApp({ Component, pageProps }) {
  return(
    <Provider value={client}>
      <Loader />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
