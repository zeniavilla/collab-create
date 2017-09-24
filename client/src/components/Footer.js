import React from 'react';

import '../styles/components/Footer.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Footer = () =>
  <Navbar className="footer">
    <Navbar.Header>
      <Navbar.Text>
        <a className="footer-brand" href="#" title="Developed by Zenia Villa">© Collab-Create</a>
      </Navbar.Text>
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem href="https://github.com/zeniavilla/collab-create" target="_blank" title="View on GitHub">
          <i className="fa fa-github" aria-hidden="true"></i>
        </NavItem>
        <NavItem href="https://zeniavilla.com" target="_blank" title="Visit ZeniaVilla.com">
          <i className="fa fa-briefcase" aria-hidden="true"></i>
        </NavItem>
      </Nav>
    </Navbar.Collapse>

  </Navbar>

export default Footer;