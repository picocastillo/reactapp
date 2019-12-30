import {GET_ALL, LOADING, ERROR, ADD_NEW} from '../types/taskTypes';


const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: '',
  redirect: false
};


export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return {...state,
        tasks: action.payload,
        loading: false,
        error: '',
        title: '',
        user_id: '',
        redirect: false
      }
    case LOADING:
      return {...state, loading: true}
    case ERROR:
      return {...state, error: action.payload, loading: false}
    case ADD_NEW:
      return {
        ...state,
        loading: false,
        error: '',
        redirect: true
      }
    default: return state
  }
}
