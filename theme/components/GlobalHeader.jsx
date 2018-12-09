import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// THEME
import theme from '../index';

// COMPONENTS
import {
  Container,
  Col,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';


function mapStateToProps(state) {
  return {
    ...state
  };
}

class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    console.log(this);
  }

  /*
  static fetchData(store) {
    const manifest = store.dispatch( manifest.getManifest );
    const pages = store.dispatch( manifest.getManifest );

    return {
      manifest,
      pages
    }
  }
  */

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderNavItems(pages) {
    /*
      need to implement react router


            <Link
              to={{
                pathname: pages[index].path,
                // search: "?sort=name",
                // hash: "#the-hash",
                // state: { fromDashboard: true }
              }}
            >{pages[index].title}</Link>
    */

    let items = [];
    for (let index in pages) {
      items.push(
        <NavItem key={index}>
          <NavLink href={pages[index].path}>
            {pages[index].title}
          </NavLink>
        </NavItem>
      );
    }
    return items;
  }

  render() {
    return (
      <header>
        <Navbar light expand="md">
          <NavbarBrand href="/">{this.props.manifest.title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.renderNavItems(this.props.pages)}
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
};

export default connect(mapStateToProps)(GlobalHeader); 