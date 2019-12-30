import React from 'react';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner'
import Fatal from '../components/Fatal'
import Card from '../components/Card'
import Comments from '../components/Modal'

import * as postActions from '../reducers/postActions';
import * as userActions from '../reducers/userActions';

const {getAll: userGetAll } = userActions;
const {getByUser: postGetByUser, toOpen, getComments  } = postActions;

class Post extends React.Component {
  state = {
    comments: []
  }
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
      await userGetAll();
    }
    if (this.props.userReducer.error){
      return
    }
    if (!('post_key' in this.props.userReducer.users[key])){
      postGetByUser(this.props.match.params.key);
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

   click = async (e) => {
    const id = e.target.dataset.id;
    const idx = e.target.dataset.idx;
    const post_key = this.props.match.params.key;
    this.props.toOpen(id,idx,post_key)
    await this.props.getComments(id,idx,post_key)
    const pkey = this.props.userReducer.users[post_key].post_key
    this.setState({
      comments: this.props.postReducer.posts[pkey][idx].comments
    });

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

    return postReducer.posts[post_key].map( (post,idx) => {
      return (
        <Card key={post.id} id={post.id} open={post.open} idx={idx} click={this.click}title={post.title} body={post.body} name={name} />
      )
    })
  }
  render(){

    return(
      <div >
        <Comments comments={this.state.comments} error={this.props.postReducer.error_comments} loading = {this.props.postReducer.loading_comments}/>
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
  return {
    userReducer,
    postReducer
  };
}
const mapDispatchToProps = {
  userGetAll,
  postGetByUser,
  toOpen,
  getComments
}
export default connect(mapToProps,mapDispatchToProps)(Post);
