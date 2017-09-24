import React from 'react';

import '../styles/components/UserForm.css';

const UserSignUpForm = props => {
  
  const { handleOnClick, handleOnChange, handleOnSubmit, services } = props;
  const { name, email, password, password_confirmation, bio, bio_img, location, phone_number, website, instagram, likes } = props.userFormData;
  const { errors } = props.currentUser;

  return (
    <div>
      <form className="user-form" onSubmit={handleOnSubmit}>
      <h2>Create account</h2>
        <label htmlFor="name">Full name</label>
        <div className="form-field">
          <input type="text" id="name" onChange={handleOnChange} value={name || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.name}` 
            : null
          }
        </div>
        
        <label htmlFor="email">Email</label>
        <div className="form-field">
          <input type="email" id="email" onChange={handleOnChange} value={email || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.email}` 
            : null
          }
        </div>
        
        <label htmlFor="password">Password</label>
        <div className="form-field">
          <input type="password" id="password" onChange={handleOnChange} value={password || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.password}` 
            : null
          }
        </div>

        <label htmlFor="password_confirmation">Confirm password</label>
        <div className="form-field">
          <input type="password" id="password_confirmation" onChange={handleOnChange} value={password_confirmation || ''} />
        </div>

        <label htmlFor="bio">Introduce yourself</label>
        <div className="form-field">
          <input type="textarea" id="bio" onChange={handleOnChange} value={bio || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.bio}` 
            : null
          }
        </div>

        <label htmlFor="bio_img">Profile image URL</label>
        <div className="form-field">
          <input type="text" id="bio_img" onChange={handleOnChange} value={bio_img || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.bio_img}` 
            : null
          }
        </div>

        <label htmlFor="location">Location</label>
        <div className="form-field">
          <input type="text" id="location" onChange={handleOnChange} value={location || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.location}` 
            : null
          }
        </div>

        <label htmlFor="phone_number">Phone number</label>
        <div className="form-field">
          <input type="text" id="phone_number" onChange={handleOnChange} value={phone_number || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.phone_number}` 
            : null
          }
        </div>

        <label htmlFor="website">Website</label>
        <div className="form-field">
          <input type="text" id="website" onChange={handleOnChange} value={website || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.website}` 
            : null
          }
        </div>

        <label htmlFor="instagram">Instagram username</label>
        <div className="form-field">
          <input type="text" id="instagram" onChange={handleOnChange} value={instagram || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.instagram}` 
            : null
          }
        </div>

        <label>Select services</label>
        <div className="form-field-check">
          {
            services.map(service => 
              <span className="form-checkboxes">
                {service.name} 
                <input type="checkbox" name={service.name} value={service.id} onChange={handleOnChange} />
              </span>
            )
          }
          
        </div>

        <div className="form-action">
          <button className="btn-form">Sign Up</button>
        </div>
      </form>
      <button name="facebook" onClick={handleOnClick} className="btn-insta">Continue with Facebook</button>
    </div>
  )
}

export default UserSignUpForm;