import { useEffect } from 'react';

export const fakeAuth = {
  isAuthenticated: false,

  login(callBack) {
<<<<<<< HEAD
    fakeAuth.isAuthenticated = !!localStorage.getItem('token');
    console.log('connecter');
=======
    // window.location.reload(true);
    const token = localStorage.getItem('token');
    fakeAuth.isAuthenticated = true;
>>>>>>> 76addc10cc306430da6e059760a5b9ed4251ed69
    callBack();
  },

  logout(callBack) {
    localStorage.clear();
    fakeAuth.isAuthenticated = false;
    console.log('deconncter');

    callBack();
  }
};
