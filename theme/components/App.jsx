import React from 'react';
import { renderRoutes } from 'react-router-config';

// COMPONENTS
import Navigation from './Navigation.jsx';

/*
  the app is a global container; the first component in the chain our app renders.
*/

// THEME


class App extends React.Component {
  componentDidMount() {
    console.log('App mounted:', this);
  }
  
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        { renderRoutes( this.props.route.routes ) }
      </React.Fragment>
    );
  }
}

export default App;