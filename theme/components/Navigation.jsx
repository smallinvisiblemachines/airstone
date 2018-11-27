import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  console.log(state);

  return {
    
  };
}

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>this is Navigation</div>
    );
  }
};

export default connect(mapStateToProps)(Navigation); 