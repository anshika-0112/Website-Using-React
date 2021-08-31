import authContext from "../../context";
import useProvideAuth from "../customHooks/useProvideAuth";

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export default ProvideAuth;