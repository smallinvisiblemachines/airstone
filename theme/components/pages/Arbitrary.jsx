import React from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

// COMPONENTS
import {
  Container,
  Col,
  Row
} from 'reactstrap';

import GlobalHeader from '../GlobalHeader.jsx';


function mapStateToProps(state) {
  let page = null;
  for (let p in state.pages) {
    if (state.pages[p].path === state.current.path) {
      page = state.pages[p];
    }
  }

   // get active theme
  let theme = null;
  for (let t in state.themes) {
    if (state.themes[t].isActive === true) {
      theme = state.themes[t];
      break;
    }
  }

  return {
    pages: state.pages,
    manifest: state.manifest,
    page,
    theme
  };
}

class Arbitrary extends React.Component {
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
              <h1>{this.props.page.title}</h1>
              <p>{'this is a second layout template with some hardcoded text'}</p>
              { ReactHtmlParser(this.props.page.description) }
            </div>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps)(Arbitrary); 