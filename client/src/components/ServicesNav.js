import React from 'react';

import { Navbar, Link, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import FilteredServices from '../containers/FilteredServices';

const ServicesNav = props => {
  const compare = (a,b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  const renderLinks = props.services.sort(compare).map(service =>
    <LinkContainer to={`/services/${service.name.toLowerCase().split(' ').join('-')}`} component={FilteredServices}>
      <NavItem eventKey={service.id}>{service.name}</NavItem>
    </LinkContainer>
  )
  return (
    <div>
      <Navbar className="services-nav" collapseOnSelect>
        <Navbar.Collapse>
          <Nav>
            {renderLinks}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default ServicesNav;