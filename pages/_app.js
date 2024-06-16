import "../styles/globals.css";
import { FirebaseProvider } from '../lib/firebaseContext';
import { Provider } from 'react-redux';
import store from '../ReduxStore/store';

export default function App({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </FirebaseProvider>
  );
}
