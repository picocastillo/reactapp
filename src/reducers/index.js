import {combineReducers} from 'redux';
import userReducer from './usersreducer';
import postReducer from './postReducer';
import taskReducer from './taskReducer';
import sessionReducer from './sessionReducer';



export default combineReducers({
  userReducer,
  postReducer,
  taskReducer,
  sessionReducer,
});
