import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import Helmet, { HelmetProvider } from 'react-helmet-async';

class Head extends Component {
  constructor(props) {
    super(props);

    console.log(this);
  }

  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
      </HelmetProvider>
    );
  }
}

export default Head;
