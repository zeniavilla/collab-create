import React from 'react';

const SignInForm = props => {
  const { handleOnChange, handleOnSubmit } = props;
  const { email, password } = props.userFormData;

  return(
    <form onSubmit={handleOnSubmit}>
      <div className="form-error">
        {props.currentUser.error}
      </div>
      
      <div className="form-field">
        <input type="email" id="email" placeholder="Email" onChange={handleOnChange} value={email || ''} />
      </div>

      <div className="form-field">
        <input type="password" id="password" placeholder="Password" onChange={handleOnChange} value={password || ''} />
      </div>

      <div className="form-action">
        <button className="btn-primary">Sign In</button>
      </div>
    </form>
  )
}

export default SignInForm;