import React from 'react';
import './Select.css';

const Select = ({ label, value1, value2, value3 }) => (
  <div className="newUserItem">
    <label>{label}</label>
    <select className="newUserSelect" name="active" id="active">
      <option value="yes">{value1}</option>
      <option value="no">{value2}</option>
    </select>
  </div>
);

export default Select;
