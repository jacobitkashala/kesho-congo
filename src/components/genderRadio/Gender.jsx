import React from 'react';
import './Gender.css';

const Gender = () => (
  <div className="newUserItem">
    <label>Sexe</label>
    <div className="newUserGender">
      <input type="radio" name="gender" id="male" value="male" />
      <label htmlFor="male">M</label>
      <input type="radio" name="gender" id="female" value="female" />
      <label htmlFor="female">F</label>
      {/* <input type="radio" name="gender" id="other" value="other" />
        <label for="other">Autre</label> */}
    </div>
  </div>
);

export default Gender;
