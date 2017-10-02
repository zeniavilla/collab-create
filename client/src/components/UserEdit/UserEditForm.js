import React from 'react';

// components
import { Col } from 'react-bootstrap';

const UserEditForm = props => {
  const { handleOnChange, handleOnSubmit, currentUser, services, handleDeleteClick } = props;
  const { name, email, password, password_confirmation, bio, bio_img, location, phone_number, website, instagram, quote } = props.userFormData;

  return (
    <div id="wrapper">
      <form onSubmit={handleOnSubmit} className="edit-form">
        <h2>Edit profile</h2>
        <label htmlFor="name">Full name</label>
        <div className="form-field">
          <input type="text" id="name" placeholder={currentUser.name} onChange={handleOnChange} value={name} />
        </div>

        <label htmlFor="email">Email</label>
        <div className="form-field">
          <input type="email" id="email" placeholder={currentUser.email} onChange={handleOnChange} value={email} />
        </div>

        <label htmlFor="password">Password</label>
        <div className="form-field">
            <input type="password" id="password" placeholder="New password" onChange={handleOnChange} value={password} />
          </div>

          <label htmlFor="password_confirmation">Confirm password</label>
          <div className="form-field">
            <input type="password" id="password_confirmation" placeholder="Confirm password" onChange={handleOnChange} value={password_confirmation} />
          </div>

          <label htmlFor="bio">Introduce yourself</label>
          <div className="form-field">
            <textarea id="bio" placeholder={currentUser.bio} onChange={handleOnChange} value={bio} />
          </div>

          <label htmlFor="bio_img">Profile image URL</label>
          <div className="form-field">
            <input type="text" id="bio_img" placeholder={currentUser.bio_img} onChange={handleOnChange} value={bio_img} />
          </div>

          <label htmlFor="location">Location</label>
          <div className="form-field">
            <input type="text" id="location" placeholder={currentUser.location} onChange={handleOnChange} value={location} />
          </div>

          <label htmlFor="phone_number">Phone number</label>
          <div className="form-field">
            <input type="text" id="phone_number" placeholder={currentUser.phone_number} onChange={handleOnChange} value={phone_number} />
          </div>

          <label htmlFor="website">Website</label>
          <div className="form-field">
            <input type="text" id="website" placeholder={currentUser.website} onChange={handleOnChange} value={website} />
          </div>

          <label htmlFor="instagram">Instagram username</label>
          <div className="form-field">
            <input type="text" id="instagram" placeholder={currentUser.instagram} onChange={handleOnChange} value={instagram} />
          </div>

          <label htmlFor="quote">Quote</label>
          <div className="form-field">
            <input type="text" id="quote" placeholder={currentUser.quote} onChange={handleOnChange} value={quote} />
          </div>

          <label>Select services</label>
          <div className="form-field-check clearfix">
          {
            services.map(service => 
              <Col sm={4}>
                <span className="form-checkboxes">
                  {service.name} 
                  <input type="checkbox" name={service.name} value={service.id} onChange={handleOnChange} />
                </span>
              </Col>
            )
          }
        </div>

          <div className="form-action">
            <button className="btn-form">Save</button>
          </div>
      </form>

      <button className="btn-form delete" onClick={handleDeleteClick}>Delete account</button>
    </div>
  )
}

export default UserEditForm;