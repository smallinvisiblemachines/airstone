import React from 'react';
import { renderRoutes } from 'react-router-config';

        // {renderRoutes(this.props.route.routes)}

class App extends React.Component {
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