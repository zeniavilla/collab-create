import React from 'react';

// styles
import '../../styles/components/UserForm.css';

// components
import { Col } from 'react-bootstrap';

const UserSignUpForm = props => {
  
  const { handleOnClick, handleOnChange, handleOnSubmit, services } = props;
  const { name, email, password, password_confirmation, bio, bio_img, location, phone_number, website, instagram, likes, quote } = props.userFormData;
  const { errors } = props.currentUser;

  return (
    <div id="wrapper">
      <form className="user-form" onSubmit={handleOnSubmit}>
      <h2>Create account</h2>
        <label htmlFor="name">Full name</label>
        <div className="form-field">
          <div className="form-error">
          { (errors) ? errors.name : null }
          </div>
          <input type="text" id="name" onChange={handleOnChange} value={name || ''} />
        </div>
        
        <label htmlFor="email">Email</label>
        <div className="form-field">
          <div className="form-error">
          { (errors) ? errors.email : null }
          </div>
          <input type="email" id="email" onChange={handleOnChange} value={email || ''} />
        </div>
        
        <label htmlFor="password">Password</label>
        <div className="form-field">
          <div className="form-error">
          { (errors) ? errors.password : null }
          </div>
          <input type="password" id="password" onChange={handleOnChange} value={password || ''} />
        </div>

        <label htmlFor="password_confirmation">Confirm password</label>
        <div className="form-field">
          <div className="form-error">
          { (errors) ? errors.password_confirmation : null }
          </div>
          <input type="password" id="password_confirmation" onChange={handleOnChange} value={password_confirmation || ''} />
        </div>

        <label htmlFor="bio">Introduce yourself</label>
        <div className="form-field">
          <textarea id="bio" onChange={handleOnChange} value={bio || ''} />
        </div>

        <label htmlFor="bio_img">Profile image URL</label>
        <div className="form-field">
          <input type="text" id="bio_img" onChange={handleOnChange} value={bio_img || ''} />
        </div>

        <label htmlFor="location">Location</label>
        <div className="form-field">
          <input type="text" id="location" onChange={handleOnChange} value={location || ''} />
        </div>

        <label htmlFor="phone_number">Phone number</label>
        <div className="form-field">
          <input type="text" id="phone_number" onChange={handleOnChange} value={phone_number || ''} />
        </div>

        <label htmlFor="website">Website</label>
        <div className="form-field">
          <input type="text" id="website" value={website || ''} />
        </div>

        <label htmlFor="instagram">Instagram username</label>
        <div className="form-field">
          <input type="text" id="instagram" value={instagram || ''} />
        </div>

        <label htmlFor="quote">Quote</label>
        <div className="form-field">
          <input type="text" id="quote" value={quote || ''} />
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
          <button className="btn-form">Sign Up</button>
        </div>
      </form>
      {/* <button name="facebook" onClick={handleOnClick} className="btn-insta">Continue with Facebook</button> */}
    </div>
  )
}

export default UserSignUpForm;