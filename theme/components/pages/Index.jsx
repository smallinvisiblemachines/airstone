import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  console.log(state);

  return {
    ...state.pages
  };
}

class Index extends React.Component {
  render() {
    return(
      <div id="index">
        <h1>This is index</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Index); 