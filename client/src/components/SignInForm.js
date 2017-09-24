import React from 'react';

const SignInForm = props => {
  const { handleOnChange, handleOnSubmit } = props;
  const { email, password } = props.userFormData;

  return(
    <form className="user-form" onSubmit={handleOnSubmit}>
      <div className="form-error">
        {props.currentUser.error}
      </div>
      
      <label htmlFor="email">Email</label>
      <div className="form-field">
        <input type="email" id="email" onChange={handleOnChange} value={email || ''} />
      </div>

      <label htmlFor="password">Password</label>
      <div className="form-field">
        <input type="password" id="password" onChange={handleOnChange} value={password || ''} />
      </div>

      <div className="form-action">
        <button className="btn-form">Sign In</button>
      </div>
    </form>
  )
}

export default SignInForm;