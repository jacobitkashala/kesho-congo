import React from 'react';
import './Input.css';
import Label from '../Label';

const Input = ({ label, placeholder, type }) => (
  <div className="newUserItem">
    <Label>{label}</Label>
    <input type={type} placeholder={placeholder} />
  </div>
);

export default Input;
