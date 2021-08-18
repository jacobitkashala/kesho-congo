import Input from '../inputField/Input';
import './YesNoOther.css';
import Label from '../Label';

const YesNoOther = ({ title, one, two, three, placeholder, type }) => (
  <div className="newUserItem">
    <Label>{title}</Label>
    <div className="newUserGender">
      <input type="radio" name="gender" id="one" value="male" />
      <label htmlFor="male">{one}</label>
      <input type="radio" name="gender" id="two" value="female" />
      <label htmlFor="female">{two}</label>
      <input type="radio" name="gender" id="three" value="female" />
      <label htmlFor="female">{three}</label>
      <Input placeholder={placeholder} type={type} />
    </div>
  </div>
);

export default YesNoOther;