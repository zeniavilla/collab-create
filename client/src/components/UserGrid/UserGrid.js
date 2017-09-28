import React from 'react';
import { Link } from 'react-router-dom';

import { Col } from 'react-bootstrap';

const UserGrid = props => {
  const { name, id, bio_img } = props.user;
  const userBackground = {
    backgroundImage: `url(${bio_img})`
  }

  return (
    <div>
      <Col sm={4}>
        <Link to={`/users/${id}`}>
          <div className="user-img" style={userBackground}>
            <div className="picture-overlay card-title">
              {name}
            </div>
          </div>
        </Link>
      </Col>
    </div>
  )
}

export default UserGrid;