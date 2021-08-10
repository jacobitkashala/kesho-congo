import './Btn.css';
import { Link as RouterLink } from 'react-router-dom';

const Btn = () => (
  <div>
    <RouterLink to="/dashboard" className="btn">
      Connexion
    </RouterLink>
  </div>
);

export default Btn;
