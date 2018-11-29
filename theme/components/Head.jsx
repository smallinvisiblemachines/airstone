import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

class Head extends Component {
  render() {
    return (
      <div>
        <Helmet title={'This is a title'}/>
      </div>
    );
  }
}

export default Head;