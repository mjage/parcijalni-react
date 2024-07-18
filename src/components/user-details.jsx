import React from 'react';
import PropTypes from 'prop-types';
import RepoList from './repository-list';

const UserDetails = ({ user, repos, onReset }) => {
  return (
    <div>
      <img src={user.avatar_url} alt="Profilna slika" />
      <h2>{user.name}</h2>
      <p>Lokacija: {user.location}</p>
      <p>Opis: {user.bio}</p>
      <RepoList repos={repos} />
      <button onClick={onReset}>Resetiraj</button>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
