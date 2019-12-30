import {LOGIN, LOADING, ERROR, LOGOUT} from '../types/sessionTypes';


const INITIAL_STATE = {
  usersname: '',
  loading: false,
  error: '',
  logged: false,
  token: '',
  message: ''
};


export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state,
        username: action.payload.username,
        token: action.payload.token,
        logged: true,
        loading: false,
        error: '',
        message: "Se ha autenticado con éxito"
      }
    case LOGOUT:
      return {...state,
        username: "",
        token: "",
        logged: false,
        loading: false,
        error: '',
        message: ""
      }
    case LOADING:
      return {...state, loading: true}
    case ERROR:
      return {...state, error: action.payload, loading: false}
    default: return state
  }
}