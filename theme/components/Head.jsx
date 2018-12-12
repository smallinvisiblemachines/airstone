import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import Helmet, { HelmetProvider } from 'react-helmet-async';

class Head extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const charset = this.props.charset ? <meta charset={this.props.charset} /> : null;

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
