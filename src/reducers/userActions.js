import axios from 'axios';
import {GET_ALL, LOADING, ERROR} from '../types/userTypes';


export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: GET_ALL,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: e.message
    })
  }
}
