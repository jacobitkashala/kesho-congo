import React from 'react';
import './Select.css';
import Label from '../Label';

const Select = ({ label, value1, value2, value3, value4, value5, value6 }) => (
  <div className="newUserItem">
    <Label>{label}</Label>
    <select className="newUserSelect" name="active" id="active">
      <option value="yes">{value1}</option>
      <option value="no">{value2}</option>
      <option value="no">{value3}</option>
      <option value="no">{value4}</option>
      <option value="no">{value5}</option>
      <option value="no">{value6}</option>
    </select>
  </div>
);

export default Select;
