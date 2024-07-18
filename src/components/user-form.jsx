import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.jpg';

const UserForm = ({ username, onChange, onSubmit }) => {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <h1>repo finder</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={username}
          onChange={onChange}
          placeholder="Unesi korisničko ime"
        />
        <br />
        <br />
        <button type="submit">Pretraži</button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  username: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
