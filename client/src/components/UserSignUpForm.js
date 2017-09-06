import React from 'react';

const UserSignUpForm = props => {
  
  const { handleOnClick, handleOnChange, handleOnSubmit } = props;
  const { name, email, password, password_confirmation } = props.userFormData;
  const { errors } = props.currentUser;

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="form-field">
          <input type="text" id="name" placeholder="Name" onChange={handleOnChange} value={name || ''} />
          {
            (errors) 
            ? `Name ${errors.name}` 
            : null
          }
        </div>

        <div className="form-field">
          <input type="email" id="email" placeholder="Email" onChange={handleOnChange} value={email || ''} />
          {
            (errors) 
            ? `Email ${errors.email}` 
            : null
          }
        </div>

        <div className="field">
          <input type="password" id="password" placeholder="Password" onChange={handleOnChange} value={password || ''} />
          {
            (errors) 
            ? `Password ${errors.email}` 
            : null
          }
        </div>

        <div className="form-field">
          <input type="password" id="password_confirmation" placeholder="Confirm password" onChange={handleOnChange} value={password_confirmation || ''} />
        </div>

        <div className="form-action">
          <button className="btn-primary">Sign Up</button>
        </div>
      </form>
      <button name="facebook" onClick={handleOnClick} className="btn-insta">Continue with Facebook</button>
    </div>
  )
}

export default UserSignUpForm;