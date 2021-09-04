import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import userReducer from "./user/userReducer";
import detailReducer from "./details/detailReducer";

const rootReducer=combineReducers(
{
    user:userReducer,
    auth:authReducer,
    categoryList:detailReducer
})

export default rootReducer;