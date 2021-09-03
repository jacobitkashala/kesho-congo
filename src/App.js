<<<<<<< HEAD
=======
import { Provider } from 'react-redux';
import store from './redux/store/store';
>>>>>>> 76addc10cc306430da6e059760a5b9ed4251ed69
import Router from './routes';
import ThemeConfig from './theme';
import ScrollToTop from './components/ScrollToTop';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
}
