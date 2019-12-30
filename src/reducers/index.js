import {combineReducers} from 'redux';
import userReducer from './usersreducer';
import postReducer from './postReducer';
import taskReducer from './taskReducer';



export default combineReducers({
  userReducer,
  postReducer,
  taskReducer
});
