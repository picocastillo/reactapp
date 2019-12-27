import axios from 'axios';
import {LOADING, ERROR,GET_BY_USER} from '../types/postTypes';
import * as userTypes from '../types/userTypes';

const {GET_ALL: USER_GET_ALL} = userTypes;


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
    const post_key = current_post.length -1 ;
    let current_users = [...users];
    current_users[key] = {
      ...users[key],
      post_key
    }
    dispatch({
      type: USER_GET_ALL,
      payload: current_users
    });

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
