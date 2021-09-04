import { Route,Redirect } from "react-router";
import {useSelector} from "react-redux";
function PrivateRoute({ children, ...rest }) {
    const isAuthenticated= useSelector(state => state.auth.isAuthenticated);
    return (
      <Route
        {...rest}
        render={({ location }) =>{
            return (isAuthenticated) ? (
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