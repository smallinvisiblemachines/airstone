import React from 'react';
import { renderRoutes } from 'react-router-config';


class App extends React.Component {
  componentDidMount() {
    console.log('App mounted');
  }
  
  render() {
    console.log(this.props.route)
    return (
      <div id="app">
        This is the app
      </div>
    );
  }
}

export default App;