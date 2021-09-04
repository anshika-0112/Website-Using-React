import { IS_AUTHENTICATED } from "./authTypes"

const isAuthenticated=(flag)=>
{
    return{
        type:IS_AUTHENTICATED,
        payload:flag
    }
}
export default isAuthenticated;