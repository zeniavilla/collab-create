import React from 'react';

const SignInForm = props => {
  const { handleOnChange, handleOnSubmit } = props;
  const { email, password } = props.userFormData;

  return(
    <div id="wrapper">
      <form className="user-form" onSubmit={handleOnSubmit}>
        <h2>Sign in</h2>
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
    </div>
  )
}

export default SignInForm;