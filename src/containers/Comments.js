import React, {Component} from 'react';
import {connect} from 'react-redux'

import Modal from '../components/Modal';


class Comments extends Component {
  state  = {
    comments: []
  }
  componentDidMount(){
    console.log("aa")
    console.log(this.props.posts)
  }

  render(){
    return (
      <Modal comments = {this.state.comments}/>
    )
  }
}
const mapToProps = (reducer) => {
  return reducer.postReducer;
}
export default connect(mapToProps)(Comments);
