export const fakeAuth = {
  isAuthenticated: false,

  login(callBack) {
    fakeAuth.isAuthenticated = !!localStorage.getItem('token');
    console.log('connecter');
    callBack();
  },

  logout(callBack) {
    localStorage.clear();
    fakeAuth.isAuthenticated = false;
    console.log('deconncter');

    callBack();
  }
};
