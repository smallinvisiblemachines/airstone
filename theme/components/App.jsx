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
  constructor(props) {
    super(props);
    console.log('App mounted:', this.props.current.theme);
  }
  
  render() {
    let primaryFont = '';
    if (this.props.current.theme.primaryFont) {
      primaryFont = `@import url('https://fonts.googleapis.com/css?family=${this.props.current.theme.primaryFont.replace(' ', '+')}');`;
    }

    return (
      <React.Fragment>
        <Head { ...manifest } />
        <style dangerouslySetInnerHTML={{__html: `
          ${ primaryFont }
          body { 
            background: ${this.props.current.theme.primaryColor}; 
          }
          p, span, h1, h2, h3, h4, h5, h6 { 
            color: ${this.props.current.theme.secondaryColor};
            font-family: "${this.props.current.theme.primaryFont}", Helvetica, Arial, sans-serif;
          }
        `}} />
        { renderRoutes( this.props.route.routes ) }
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);