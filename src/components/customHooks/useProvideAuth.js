import Authentication from "../AuthenticationControl/Authentication";
import { useState } from "react";

function useProvideAuth() {
  const [user, setUser] = useState(sessionStorage.getItem("user"));
  const signin = (cb) => {
    return Authentication.signin(() => {
      setUser(sessionStorage.getItem("user"));
      cb();
    });
  };

  const signout = (cb) => {
    return Authentication.signout(() => {
      sessionStorage.removeItem("user");
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}

export default useProvideAuth;
