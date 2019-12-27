import React, {useState}  from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import PublicationsList from '../containers/PublicationsList';
import * as publicationsActions from '../reducers/publicationsActions';




function Publications(props) {
 let {keys} = useParams();
 const [key, setKey] = useState(keys);
  return(
    <div>
    <PublicationsList  key={key}/>
    </div>
  )
}

const mapToProps = (reducer) => {
  console.log(reducer)

  return reducer.publicationReducers;
}
export default connect(mapToProps, publicationsActions)(Publications);
