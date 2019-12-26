import React from 'react';
import Header from './components/Header';

function Layout(props) {
  return(
    <React.Fragment>
      <Header/>
      <div className="margen">
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Layout;
