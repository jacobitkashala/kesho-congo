import { useEffect } from 'react';

export const fakeAuth = {
  isAuthenticated: false,

  login(callBack) {
    const token = localStorage.getItem('token');
    fakeAuth.isAuthenticated = true;
    callBack();
  },

  logout(callBack) {
    localStorage.clear();
    fakeAuth.isAuthenticated = false;
    console.log('deconncter');

    callBack();
  }
};
