import {createStore} from 'redux';
import rootReducer from './rootReducer';
import userReducer from './user/userReducer';
const store=createStore(userReducer);

export default store;