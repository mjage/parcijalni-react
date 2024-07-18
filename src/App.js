import React, { useState } from 'react';
import UserForm from './components/user-form';
import UserDetails from './components/user-details';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Not Found') {
          alert('User not found');
          return;
        }
        setUser(data);
        return fetch(`https://api.github.com/users/${username}/repos`);
      })
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error('Error fetching GitHub data: ', error));
  };

  const handleReset = () => {
    setUsername('');
    setUser(null);
    setRepos([]);
  };

  return (
    <div>
      {!user ? (
        <UserForm
          username={username}
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />
      ) : (
        <UserDetails user={user} repos={repos} onReset={handleReset} />
      )}
    </div>
  );
};

export default App;
