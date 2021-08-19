const Authentication = {
    isAuthenticated: false,
    signin(cb) {
      Authentication.isAuthenticated = true;
      setTimeout(cb, 100); 
    },
    signout(cb) {
      Authentication.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

  export default Authentication;