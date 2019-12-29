import axios from 'axios';
import {LOADING, ERROR,GET_BY_USER,LOADING_COMMENTS,ERROR_COMMENTS} from '../types/postTypes';
import * as userTypes from '../types/userTypes';

const {GET_ALL: USER_GET_ALL} = userTypes;


export const getByUser = (key) => async(dispatch,getState) => {
  const {users} = getState().userReducer;
  const {posts} = getState().postReducer;
  dispatch({
    type: LOADING
  })
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${users[key].id}`);
      const news = res.data.map((posts) => ({
        ...posts,
        comments: [],
        open: false
      }))
    const current_post = [
      ...posts,
      news
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

export const getComments = (id_post,idx,post_key) => async(dispatch,getState) => {
    dispatch({
      type: LOADING_COMMENTS
    })
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id_post}`);
        const {posts} = getState().postReducer;
        const {users} = getState().userReducer;
        const key_post = users[post_key].post_key
        const selected = posts[key_post][idx];

        const updated = {
          ...selected,
          comments: res.data
        }
        const post_updated = [...posts]
        post_updated[post_key] = {
          ...posts[post_key]
        }
        post_updated[key_post][idx] = updated
        // console.log(updated);
        dispatch({
          type: GET_BY_USER,
          payload: post_updated
        })

    } catch(e){
      dispatch({
        type: ERROR_COMMENTS,
        payload: e.message
      })
    }

}

export const toOpen = (id,idx,post_key) => (dispatch,getState) => {
  const {posts} = getState().postReducer;
  const {users} = getState().userReducer;
  const key_post = users[post_key].post_key
  const selected = posts[key_post][idx];

  const updated = {
    ...selected,
    open: !selected.open
  }
  const post_updated = [...posts]
  post_updated[post_key] = {
    ...posts[post_key]
  }

  post_updated[key_post][idx] = updated
  dispatch({
        type: GET_BY_USER,
        payload: post_updated
      })



}
