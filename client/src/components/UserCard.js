import React from 'react';
import { Link } from 'react-router-dom';

import { Col } from 'react-bootstrap';

const UserCard = props => {
  const { name, id, bio_img } = props.user;
  const userBackground = {
    backgroundImage: `url(${bio_img})`
  }

  return (
    <div>
      <Col sm={3}>
        <Link to={`/users/${id}`}>
          <div className="user-img" style={userBackground}>
            {name}
          </div>
        </Link>
      </Col>
    </div>
  )
}

export default UserCard;