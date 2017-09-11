import React from 'react';
import { Link } from 'react-router-dom';

import { Col } from 'react-bootstrap';

const UserCard = props => {
  const { name, id, email } = props.user;

  return (
    <div>
      <Col sm={3}>
        <Link to={`/users/${id}`}>
          <div className="user-img">
            {name}
          </div>
        </Link>
      </Col>
    </div>
  )
}

export default UserCard;