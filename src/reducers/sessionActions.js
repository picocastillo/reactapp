import axios from 'axios';
import {LOGIN, LOADING, ERROR} from '../types/sessionTypes';
import { todosRef } from "../firebase/FirebaseConfig";


export const login = (email,password) => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    console.log("LLeganding..")
    //Firebase.doCreateUserWithEmailAndPassword(email,password)
    console.log("Good")
    // dispatch({
    //   type: GET_ALL,
    //   payload: res.data
    // })
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: e.message
    })
  }
}
