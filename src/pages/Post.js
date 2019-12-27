import React from 'react';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner'
import Fatal from '../components/Fatal'
import Table from '../components/Table'

import * as postActions from '../reducers/postActions';
import * as userActions from '../reducers/userActions';

const {getAll: userGetAll } = userActions;
const {getByUser: postGetByUser } = postActions;

class Post extends React.Component {

  async componentDidMount(){
    const {
      userGetAll,
      postGetByUser,
      match: {
        params: {
          key
        }
      }
    }  = this.props
    // this.props.getByUser(this.props.match.params.key)
    if (!this.props.userReducer.users.length){
      await this.props.userGetAll();
    }
    if (this.props.userReducer.error){
      return
    }
    if (!('post_key' in this.props.userReducer.users[this.props.match.params.key])){
      this.props.postGetByUser(this.props.match.params.key);
    }
  }
  putUser(){
    const {
      userReducer,
      match: {
        params: {
          key
        }
      }
    } = this.props
    if ( !userReducer.users.length || userReducer.loading){
      return <Spinner />
    }

    if (userReducer.error){
      return <Fatal message={userReducer.error} />
    }

    return (
      <h2> Publicaciones de {userReducer.users[key].name}</h2>
    )


  }

  render(){
    console.log(this.props)

    return(
      <div >
         {this.putUser()}

      </div>
    )
  }
}
const mapToProps = ({postReducer, userReducer}) => {
  // console.log(reducer)

  return {
    userReducer,
    postReducer
  };
}
const mapDispatchToProps = {
  userGetAll,
  postGetByUser
}
export default connect(mapToProps,mapDispatchToProps)(Post);
