import { SET_USER_DETAILS } from "./userType"

const setUserDetails=(userInfo)=>
{
    return{
        type:SET_USER_DETAILS,
        payload:userInfo
    }
}

export default setUserDetails;