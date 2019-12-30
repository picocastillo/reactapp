// import axios from 'axios';
import {LOGIN, LOADING, ERROR} from '../types/sessionTypes';
import firebase from 'firebase/app'
require('firebase/auth')




export const login = (email,password) => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const res2 = await firebase.auth().signInWithEmailAndPassword(email,password);
    dispatch({
      type: LOGIN,
      payload: {
        username: 'asd',
        token: 'asd'
      }
    })

  } catch (e) {
    console.log("ERROR ",e.message)
    dispatch({
      type: ERROR,
      payload: e.message
    })
  }
}



export const register = (email,password) => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    console.log("Registrando")
    const res = await firebase.auth().createUserWithEmailAndPassword(email,password);
    res.user.updateProfile({
      displayNames: "Colon De Santa Fe"
    })


    //TO SEND EMAIL VERIFICATION
    // const config = {
      //   url: 'http://localhost:3000'
      // }
    //res.user.sendEmailVerification(config)
    // firebase.auth().signOut()
    const res2 = await firebase.auth().signInWithEmailAndPassword(email,password);
    // if (res2.user.emailVerification()){
    //  //DEBE REALIZAR EL procESO DE VERIFICACION POIR EMAIL
    // }
    console.log(res2)

    dispatch({
      type: LOGIN,
      payload: {
        username: 'asd',
        token: 'asd'
      }
    })

  } catch (e) {
    console.log("ERROR ",e.message)
    dispatch({
      type: ERROR,
      payload: e.message
    })
  }
}
