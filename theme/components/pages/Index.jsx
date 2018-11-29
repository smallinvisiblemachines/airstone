import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import {
  Container,
  Col,
  Row
} from 'reactstrap';

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
    )
  }
}

export default connect(mapStateToProps)(Index); 