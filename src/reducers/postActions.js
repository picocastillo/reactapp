import axios from 'axios';
import {LOADING, ERROR,GET_BY_USER} from '../types/postTypes';




export const getByUser = (key) => async(dispatch,getState) => {
  const {users} = getState().userReducer;
  const {posts} = getState().postReducer;


  // console.log("kk")
  // console.log(user_id)
  dispatch({
    type: LOADING
  })
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${users[key].id}`);
    const current_post = [
      ...posts,
      res.data
    ]
    dispatch({
      type: GET_BY_USER,
      payload: current_post
    })
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: e.message
    })
  }
}
