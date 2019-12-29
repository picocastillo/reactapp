import {GET_BY_USER, LOADING, ERROR, LOADING_COMMENTS, ERROR_COMMENTS} from '../types/postTypes';


const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
  loading_comments: false,
  error_comments: ''
};


export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BY_USER:
      return {...state,
        posts: action.payload,
        loading: false,
        error: '',
        error_comments: '',
        loading_comments: false
      }
    case LOADING:
      return {...state, loading: true}
    case ERROR:
      return {...state, error: action.payload, loading: false}
    case LOADING_COMMENTS:
      return {...state, loading_comments: true}
    case ERROR_COMMENTS:
      return {...state, error_comments: action.payload, loading_comments: false}
    default: return state
  }
}
