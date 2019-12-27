import React from 'react';
import {connect} from 'react-redux';

import * as postActions from '../reducers/postActions';
import * as userActions from '../reducers/userActions';

const {getAll: userGetAll } = userActions;
const {getByUser: postGetByUser } = postActions;
// import Spinner from '../components/Spinner'
// import Fatal from '../components/Fatal'
// import Table from '../components/Table'

class Post extends React.Component {

  async componentDidMount(){
    // this.props.getByUser(this.props.match.params.key)
    if (!this.props.userReducer.users.length){
      await this.props.userGetAll();
    }
     this.props.postGetByUser(this.props.match.params.key);
  }


  render(){
    console.log(this.props)

    return(
      <div >
        <h2> Publicaciones del usuario </h2> <br></br>
        {this.props.key}
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
