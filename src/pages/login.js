import React from 'react';
import Background from '../components/authentication/login/images/undraw_doctors_hwty (1).svg';
import '../components/authentication/login/Login.css';
import Form from '../components/authentication/login/form/Form';

const Login = () => (
  <>
    <div className="container">
      <div className="img">
        <div className="title">
          <h1>KESHO CONGO</h1>
          <br />
          <p>Building health and resilient, communities-Empowering, youth and rural women</p>
        </div>
        <img className="picture" alt="doctors" src={Background} />
      </div>
      <Form />
    </div>
  </>
);

export default Login;
