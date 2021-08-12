import React from 'react';
import './Select.css';

const Select = ({ label, value1, value2, value3, value4, value5, value6 }) => (
  <div className="newUserItem">
    <label>{label}</label>
    <select className="newUserSelect" name="active" id="active">
      <option value="yes">{value1}</option>
      <option value="no">{value2}</option>
      <option value="no">{value3}</option>
      <option value="no">{value4}</option>
      <option value="no">{value5}</option>
    </select>
  </div>
);

export default Select;
