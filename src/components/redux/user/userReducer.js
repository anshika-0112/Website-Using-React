import { getItem } from '../../../utils/manageSessionStorage';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userType'

const initialState = {
  loading: false,
  users:getItem("user"),
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default: return state
  }
}

export default userReducer;