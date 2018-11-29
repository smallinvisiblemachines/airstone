import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderNavItems(pages) {
    let items = [];
    for (let p = 0; pages.length > p; ++p) {
      items.push(
        <NavItem>
          <NavLink href={pages[p].path}>{pages[p].title}</NavLink>
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