import Input from '../inputField/Input';
import './YesNoOther.css';

const YesNoOther = ({ title, yes, no, placeholder, type }) => (
  <div className="newUserItem">
    <label>{title}</label>
    <div className="newUserGender">
      <input type="radio" name="gender" id="male" value="male" />
      <label htmlFor="male">{yes}</label>
      <input type="radio" name="gender" id="female" value="female" />
      <label htmlFor="female">{no}</label>
      <Input placeholder={placeholder} type={type} />
    </div>
  </div>
);

export default YesNoOther;
