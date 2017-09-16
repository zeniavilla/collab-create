import React from 'react';
import { Link } from 'react-router-dom';

import { Col } from 'react-bootstrap';

const ServiceCategory = props => {
  const { name, img_url } = props.service;
  const slug = name.toLowerCase().split(' ').join('-');
  const serviceBackground = {
    backgroundImage: `url(${img_url})`
  };

  return (
    <div>
      <Col sm={4}>
        <Link to={`/services/${slug}`}>
          <div className="service-img" style={serviceBackground}>
            <div className="picture-overlay card-title">
              {name}
            </div>
          </div>
        </Link>
      </Col>
    </div>
  )
}

export default ServiceCategory;