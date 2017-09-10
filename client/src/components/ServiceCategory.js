import React from 'react';
import { Link } from 'react-router-dom';

import { Col } from 'react-bootstrap';

const ServiceCategory = props => {
  const { name } = props.service;
  const slug = name.toLowerCase().split(' ').join('-');

  return (
    <div>
      <Col sm={3}>
        <Link to={`/services/${slug}`}>
          <div className="service-img">
            {name}
          </div>
        </Link>
      </Col>
    </div>
  )
}

export default ServiceCategory;