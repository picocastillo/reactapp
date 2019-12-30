import axios from 'axios';
import {GET_ALL, LOADING, ERROR} from '../types/taskTypes';


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
    // console.log("ASSS")
    // console.log(tasks)
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
