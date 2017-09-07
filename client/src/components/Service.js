import React from 'react';

const Service = props => {
  const { name } = props.service;

  return (
    <div>
      {name}
    </div>
  )
}

export default Service;