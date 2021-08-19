import { useContext } from "react";
import authContext from "../context";
const useAuth=()=>
{
    let auth=useContext(authContext);
    return auth;
}

export default useAuth;;