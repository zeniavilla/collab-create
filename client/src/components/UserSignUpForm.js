import React from 'react';

const clientId = process.env.INSTA_CLIENT_ID;

const UserSignUpForm = props => {
  const { handleOnClick, handleOnChange } = props;

  return (
    <div>
      <form>
        <div className="form-field">
          <input type="text" id="name" placeholder="Name" />
        </div>

        <div className="form-field">
          <input type="email" id="email" placeholder="Email" />
        </div>

        <div className="form-field">
          <input type="password" id="name" placeholder="Password" />
        </div>

        <div className="form-field">
          <input type="password" id="name" placeholder="Confirm password" />
        </div>

        <div className="form-action">
          <button className="btn-primary">Sign Up</button>
        </div>
      </form>
      <button onChange={handleOnChange} onClick={handleOnClick} className="btn-insta">Continue with Facebook</button>
    </div>
  )
}

export default UserSignUpForm;