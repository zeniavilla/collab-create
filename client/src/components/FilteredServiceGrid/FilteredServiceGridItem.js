import React from 'react';

import UserGrid from '../UserGrid/UserGrid';

const Service = props => {
  const renderUsers = props.service.users.map(user => <UserGrid user={user} key={user.id} />);

  return (
    <div className="service-users">
      <h2>{props.service.name}</h2>
      <div>{renderUsers}</div>
    </div>
  )
}

export default Service;