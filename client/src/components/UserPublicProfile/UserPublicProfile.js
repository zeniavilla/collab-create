import React from 'react';

import { Button, Col, Row } from 'react-bootstrap';

const UserPublicProfile = props => {
  const { name, email, bio, bio_img, phone_number, website, instagram, location, services, quote } = props.user;
  
  const bioBackgroundImg = {
    backgroundImage: `url(${bio_img})`
  };

  const renderServices = (services) ? services.map(service => service.name).join(', ') : null

  return (
    <div>
      <Row className="profile-header">
        <Col lg={3}>
          <div className="profile-bio-img" style={bioBackgroundImg}>
            <Button href={`mailto:${email}`} title={`Email ${name}`}><i className="fa fa-envelope-o"></i></Button>
          </div>
        </Col>
        <Col lg={9}>
          <h1>Meet</h1>
          <h2>{name}</h2>
          <div className="quote-text">"{quote}"</div>
        </Col>
      </Row>

      <Row>
        <Col sm={2} className="center">
          <i className="fa fa-briefcase profile-icon"></i>
        </Col>
        <Col sm={10}  className="border-col">
          <div className="profile-section">
            {renderServices}
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={2} className="center">
          <i className="fa fa-map-marker profile-icon"></i>
        </Col>
        <Col sm={10}  className="border-col">
          <div className="profile-section">
            {location}
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={2} className="center">
          <i className="fa fa-user profile-icon"></i>
        </Col>
        <Col sm={10}  className="border-col">
          <div className="profile-section">
            {bio}
          </div>
        </Col>
      </Row>

      <Row>
      <Col sm={2} className="center">
          <i className="fa fa-envelope profile-icon"></i>
        </Col>
        <Col sm={10}  className="border-col">
          <div className="profile-section">
            <div><a href={`mailto:${email}`} title={`Email ${name}`}>{email}</a></div>
            <div><a href={`tel:${phone_number}`} title={`Call ${name}`}>{phone_number}</a></div>
          </div>
        </Col>
      </Row>

      <Row>
      <Col sm={2} className="center">
          <i className="fa fa-user-plus profile-icon"></i>
        </Col>
        <Col sm={10}  className="border-col">
          <div className="profile-section">
            <div><a href={`http://${website}`} target="_blank" title={`Visit ${name}'s site`}>Website</a></div>
            <div><a href={`http://instagram.com/${instagram}`}target="_blank" title={`Check out ${name}'s Instagram`}>Instagram</a></div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserPublicProfile;