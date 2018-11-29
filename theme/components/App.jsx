import React from 'react';
import { renderRoutes } from 'react-router-config';

// COMPONENTS
import Helmet from 'react-helmet';
// import Head from './Head.jsx';

/*
  the app is a global container; the first component in the chain our app renders.
  thus, any layout here will appear everywhere.
*/

// THEME


class App extends React.Component {
  componentDidMount() {
    console.log('App mounted:', this);
  }
  
  render() {
    return (
      <React.Fragment>
        { renderRoutes( this.props.route.routes ) }
      </React.Fragment>
    );
  }
}

export default App;