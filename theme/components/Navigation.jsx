import React, { Component } from 'react';
import { connect } from 'react-redux';

// THEME
import theme from '../index';

// COMPONENTS

function mapStateToProps(state) {
  return {
    pages: state.pages
  };
}

class Navigation extends Component {
  constructor(props) {
    super(props);

    console.log(this);
  }

  render() {
    return (
      <header>
        this is Navigation
      </header>
    );
  }
};

export default connect(mapStateToProps)(Navigation); 