import React from 'react';
import './Select.css';
import Label from '../Label';

const Select = ({ label, value1, value2, value3 }) => (
  <div className="newUserItem">
    <Label>{label}</Label>
    <select className="newUserSelect" name="active" id="active">
      <option value="yes">{value1}</option>
      <option value="no">{value2}</option>
      <option value="no">{value3}</option>
    </select>
  </div>
);

export default Select;
