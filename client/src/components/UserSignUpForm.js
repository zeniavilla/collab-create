import React from 'react';

import '../styles/components/UserForm.css';

const UserSignUpForm = props => {
  
  const { handleOnClick, handleOnChange, handleOnSubmit, services } = props;
  const { name, email, password, password_confirmation, bio, bio_img, location, phone_number, website, instagram, likes } = props.userFormData;
  const { errors } = props.currentUser;

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="form-field">
          <input type="text" id="name" placeholder="Full name" onChange={handleOnChange} value={name || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.name}` 
            : null
          }
        </div>

        <div className="form-field">
          <input type="email" id="email" placeholder="Email" onChange={handleOnChange} value={email || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.email}` 
            : null
          }
        </div>

        <div className="form-field">
          <input type="password" id="password" placeholder="Password" onChange={handleOnChange} value={password || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.password}` 
            : null
          }
        </div>

        <div className="form-field">
          <input type="password" id="password_confirmation" placeholder="Confirm password" onChange={handleOnChange} value={password_confirmation || ''} />
        </div>

        <div className="form-field">
          <input type="text" id="bio" placeholder="Write a little about yourself." onChange={handleOnChange} value={bio || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.bio}` 
            : null
          }
        </div>

        <div className="form-field">
          <input type="text" id="bio_img" placeholder="Bio image" onChange={handleOnChange} value={bio_img || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.bio_img}` 
            : null
          }
        </div>

        <div className="form-field">
          <input type="text" id="location" placeholder="Location" onChange={handleOnChange} value={location || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.location}` 
            : null
          }
        </div>

        <div className="form-field">
          <input type="text" id="phone_number" placeholder="Phone number" onChange={handleOnChange} value={phone_number || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.phone_number}` 
            : null
          }
        </div>

        <div className="form-field">
          <input type="text" id="website" placeholder="Website" onChange={handleOnChange} value={website || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.website}` 
            : null
          }
        </div>

        <div className="form-field">
          <input type="text" id="instagram" placeholder="Instagram" onChange={handleOnChange} value={instagram || ''} />
        </div>
        <div className="form-error">
          {
            (errors) 
            ? `${errors.instagram}` 
            : null
          }
        </div>

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