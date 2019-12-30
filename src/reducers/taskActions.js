import axios from 'axios';
import {GET_ALL, LOADING, ERROR, ADD_NEW} from '../types/taskTypes';


export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');

    const tasks = {}

    res.data.map( (task) => (
      tasks[task.userId] = {
        ...tasks[task.userId],
        [task.id]: {
          ...task
        }
      }
    ))

    dispatch({
      type: GET_ALL,
      payload: tasks
    })
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: e.message
    })
  }
}

export const addNew = (title,user_id) => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    dispatch({
      type: ADD_NEW
    })
    const res =  await axios.post('https://jsonplaceholder.typicode.com/todos',{
      userId: user_id,
      title
    });

  } catch (e) {
    dispatch({
      type: ERROR
    })
  }
}
