import { IS_AUTHENTICATED } from "./authTypes"
let isLoggedIn;
if(sessionStorage.getItem("user"))
{
    isLoggedIn=true;
}
else
{
    isLoggedIn=false;
}
const initialState={
    isAuthenticated:isLoggedIn
}

const authReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case IS_AUTHENTICATED:return {...state,isAuthenticated:action.payload};
        default: return state;
    }
}

export default authReducer;