import axios from 'axios';



export const getAll = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch({
    type: 'get_users',
    payload: res.data
  })
}
