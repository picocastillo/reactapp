import {combineReducers} from 'redux';
import userReducer from './usersreducer';
import postReducer from './postReducer';



export default combineReducers({
  userReducer,
  postReducer
});
