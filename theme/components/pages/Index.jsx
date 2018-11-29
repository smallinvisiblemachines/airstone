import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import {
  Container,
  Col,
  Row
} from 'reactstrap';

import Head from '../Head.jsx';
import GlobalHeader from '../GlobalHeader.jsx';


function mapStateToProps(state) {
  return {
    ...state
  };
}

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <React.Fragment>
      <Head/>
      This is index2
      <Container>
        <Row>
          <Col sm={12}>
            <GlobalHeader {...this.props}/>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col sm={12}>

            <div id="index">
              <h1>This is index</h1>
            </div>

          </Col>
        </Row>
      </Container>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(Index); 