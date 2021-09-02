import loginReducer from "./login/loginReducer";
import detailReducer from "./details/detailReducer";
import { combineReducers } from "redux";

const rootReducer=combineReducers(
{
    loginReducer:loginReducer,
    detailReducer:detailReducer
})

export default rootReducer;