import React from 'react';

import UserCard from './UserCard';

const Service = props => {
  const renderUsers = props.service.users.map(user => <UserCard user={user} key={user.id} />);

  return (
    <div>
      <h2>{props.service.name}</h2>
      <div>{renderUsers}</div>
    </div>
  )
}

export default Service;