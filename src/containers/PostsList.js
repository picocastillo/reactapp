import React from 'react';
import {connect} from 'react-redux';

import * as publicationsActions from '../reducers/postActions';
// import Spinner from '../components/Spinner'
// import Fatal from '../components/Fatal'
// import Table from '../components/Table'

class PublicationsList extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log("asd")
    console.log(this.props)
    debugger

  }


  render(){

    return(
      <div >
        <h2> Publicaciones del usuario </h2> <br></br>
        {this.props.key}
      </div>
    )
  }
}
const mapToProps = (reducer) => {
  console.log(reducer)

  return reducer.publicationReducers;
}
export default connect(mapToProps)(PublicationsList);
