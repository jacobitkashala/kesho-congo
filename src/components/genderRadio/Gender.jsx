import React from 'react';
import './Gender.css';
import Label from '../Label';

const Gender = () => (
  <div className="newUserItem">
    <Label>Sexe</Label>
    <div className="newUserGender">
      <input type="radio" name="gender" id="male" value="male" />
      <Label htmlFor="male">M</Label>
      <input type="radio" name="gender" id="female" value="female" />
      <Label htmlFor="female">F</Label>
      {/* <input type="radio" name="gender" id="other" value="other" />
        <label for="other">Autre</label> */}
    </div>
  </div>
);

export default Gender;
