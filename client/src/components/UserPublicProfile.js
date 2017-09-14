import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

const UserPublicProfile = props => {
  const { id, name, email, bio, bio_img, phone_number, website, instagram, location, services } = props.user;
  
  const bioBackgroundImg = {
    backgroundImage: `url(${bio_img})`
  };

  const renderServices = (services) ? services.map(service => service.name).join(', ') : null

  return (
    <div>
      <div className="profile-bio-img" style={bioBackgroundImg}></div>
      <Button href={`mailto:${email}`}>Email</Button>
      <h2>{name}</h2>
      <div>{renderServices}</div>
      <div>{location}</div>
      <div>{email}</div>
      <div>{bio}</div>
    </div>
  )
}

export default UserPublicProfile;