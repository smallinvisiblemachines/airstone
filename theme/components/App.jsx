import React from 'react';
import { renderRoutes } from 'react-router-config';

class App extends React.Component {
  componentDidMount() {
    console.log('App mounted:', this);
  }
  
  render() {
    return renderRoutes( this.props.route.routes );
  }
}

export default App;