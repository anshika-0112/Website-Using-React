import { useContext } from "react";
import { Route,Redirect } from "react-router";
import {authContext} from "../context";

function PrivateRoute({ children, ...rest }) {
    let auth = useContext(authContext);
    const isLoggedIn=sessionStorage.getItem("user");
    return (
      <Route
        {...rest}
        render={({ location }) =>{
        console.log(location);
          return (auth.user || isLoggedIn) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }}
      />
    );
  }

  export default PrivateRoute;