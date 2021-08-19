import Authentication from "../AuthenticationControl/Authentication";
import { useState } from "react";
function useProvideAuth() {
    const [user, setUser] = useState(null);
  
    const signin = cb => {
      return Authentication.signin(() => {
        setUser(sessionStorage.getItem("user"));
        cb();
      });
    };
  
    const signout = cb => {
      return Authentication.signout(() => {
        setUser(null);
        cb();
      });
    };
  
    return {
      user,
      signin,
      signout
    };
  }

  export default useProvideAuth;