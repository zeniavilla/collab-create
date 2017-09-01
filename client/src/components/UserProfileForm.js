import React from 'react';

const UserProfileForm = props => {
  const { handleOnChange, handleOnSubmit } = props;
  const { name, email, password, password_confirmation } = props.currentUser;

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-field">
        <input type="text" id="name" placeholder="Name" onChange={handleOnChange} value={name} />
      </div>

      <div className="form-field">
        <input type="email" id="email" placeholder="Email" onChange={handleOnChange} value={email} />
      </div>

      <div className="form-field">
          <input type="password" id="password" placeholder="Password" onChange={handleOnChange} value={password} />
        </div>

        <div className="form-field">
          <input type="password" id="password_confirmation" placeholder="Confirm password" onChange={handleOnChange} value={password_confirmation} />
        </div>

        <div className="form-action">
          <button className="btn-primary">Edit</button>
        </div>
    </form>
  )
}

export default UserProfileForm;