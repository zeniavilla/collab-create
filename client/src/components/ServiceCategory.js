import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceCategory = props => {
  const { name } = props.service;

  return (
    <div>
      <Col sm={3}>
        <div className="service-img">
          {name}
        </div>
      </Col>
    </div>
  )
}

export default ServiceCategory;