import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = props =>
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">collab|create</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      {
        (props.currentUser.length) 
        ? <NavItem eventKey={1}>currentUser.name</NavItem>
        : <LinkContainer to="/sign_in">
          <NavItem eventKey={1}>Sign In</NavItem>
        </LinkContainer>
      }
      {
        (props.currentUser.length)
        ? <LinkContainer to="/sign_out">
          <NavItem eventKey={2}>Sign Out</NavItem>
        </LinkContainer>
        : <LinkContainer to="/sign_up">
          <NavItem eventKey={2}>Create Account</NavItem>
        </LinkContainer>
      }
    </Nav>
  </Navbar.Collapse>
</Navbar>

export default NavBar;