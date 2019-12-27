import React from 'react';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner'
import Fatal from '../components/Fatal'
import Card from '../components/Card'

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
    if (!('post_key' in this.props.userReducer.users[key])){
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
      <h2> Publicaciones de { userReducer.users[key].name}</h2>
    )


  }

  putPosts(){
    const {
      userReducer,
      userReducer: { users},
      postReducer,
      postReducer: {posts},
      match: {
        params: {
          key
        }
      }
    } = this.props;
    if (!users.length) return;
    if (userReducer.error) return;

    if (postReducer.loading){
      return <Spinner />
    }

    if (postReducer.error){
      return <Fatal message={postReducer.error} />
    }

    if (!posts.length) return
    if (! ('post_key' in users[key])) return

    const {post_key} = users[key];

    const name = userReducer.users[key].name

    return postReducer.posts[post_key].map( (post) => {
      return (
        <Card id={post.id} title={post.title} body={post.body} name={name} />
      )
    })

    return
  }
  render(){
    console.log(this.props)

    return(
      <div >
         {this.putUser()}
         <div className="container">
           <br></br>
           <div className="row">
             {this.putPosts()}
           </div>
         </div>
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
