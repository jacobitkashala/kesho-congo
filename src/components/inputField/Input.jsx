import React from 'react';
import './Input.css';

const Input = ({ label, placeholder, type }) => (
  <div className="newUserItem">
    <label>{label}</label>
    <input type={type} placeholder={placeholder} />
  </div>
);

export default Input;
