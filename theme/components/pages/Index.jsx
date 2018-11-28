import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import {
  Container,
  Col,
  Row
} from 'reactstrap';

function mapStateToProps(state) {
  console.log(state);

  return {
    ...state.pages
  };
}

class Index extends React.Component {
  render() {
    return(
      <Container>
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