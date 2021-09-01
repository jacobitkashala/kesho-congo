import { Provider } from 'react-redux';
import { store } from './redux/store';
import Router from './routes';
import ThemeConfig from './theme';
import ScrollToTop from './components/ScrollToTop';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <Provider store={store}>
      <ThemeConfig>
        <ScrollToTop />
        <Router />
      </ThemeConfig>
    </Provider>
  );
}
