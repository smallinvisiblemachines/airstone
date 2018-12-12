import React from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';

// COMPONENTS
import Helmet, { HelmetProvider } from 'react-helmet-async';
import Head from './Head.jsx';

// CONFIG / THEME
import manifest from '../../manifest.json';
/*
  the app is a global container; the first component in the chain our app renders.
  thus, any layout here will appear everywhere.
*/

function mapStateToProps(state) {
  return state;
};

class App extends React.Component {
  componentDidMount() {
    console.log('App mounted:', this);
  }
  
  render() {
    return (
      <React.Fragment>
        <Head { ...manifest } />
        <style dangerouslySetInnerHTML={{__html: `
          body { background: ${this.props.current.theme.primaryColor} }
          p, span, h1, h2, h3, h4, h5, h6 { color: ${this.props.current.theme.secondaryColor} }
        `}} />
        { renderRoutes( this.props.route.routes ) }
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);