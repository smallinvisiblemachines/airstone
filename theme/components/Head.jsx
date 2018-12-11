import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import Helmet, { HelmetProvider } from 'react-helmet-async';

import App from './App.jsx';

class Head extends Component {
  constructor(props) {
    super(props);

    console.log('Head!', this.props);
  }

  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <App route={this.props.route}/>
      </HelmetProvider>
    );
  }
}

export default Head;
