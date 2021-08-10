import PropTypes from 'prop-types';
import './LogInInput.css';

// LogInInput.propTypes = {
//   icon: PropTypes.icon,
//   placeholder: PropTypes.icon
// };

const LogInInput = ({ icon, placeholder }) => (
  <div className="input-div input">
    <div className="icon input__icon">
      <i className={icon} />
    </div>
    <div className="div input__field">
      <input placeholder={placeholder} type="text" className="input input__field--input" />
    </div>
  </div>
);

export default LogInInput;
