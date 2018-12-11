import React from 'react';
import { renderRoutes } from 'react-router-config';

// COMPONENTS
import Helmet, { HelmetProvider } from 'react-helmet-async';
import Head from './Head.jsx';

// CONFIG
import manifest from '../../manifest.json';
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
        <Head { ...manifest } />
        { renderRoutes( this.props.route.routes ) }
      </React.Fragment>
    );
  }
}

export default App;