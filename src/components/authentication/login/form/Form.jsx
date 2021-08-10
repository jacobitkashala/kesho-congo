import React from 'react';
import './Form.css';
import Avatar from './avatar.svg';
import Btn from '../loginBtn/Btn';
import LogInInput from '../logInInput/LogInInput';

const Form = () => (
  <div className="login-content">
    <form>
      <img className="avatar" src={Avatar} alt="avatar" />
      <LogInInput icon="fas fa-user" placeholder="Nom d'utilisateur" />
      <LogInInput icon="fas fa-lock" placeholder="Mot de passe" />
      <a href="TO_BE_MODIFIED">Mot de passe oublié?</a>
      <Btn />
    </form>
  </div>
);

export default Form;
