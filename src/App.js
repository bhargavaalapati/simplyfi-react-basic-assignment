import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import UserCard from './components/UserCard/UserCard'; // Import the UserCard
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ... fetch logic remains the same ...
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
  // Use the standard 'container' for a wider layout
  <div className="container">
    {loading ? (
      <Loader />
    ) : (
      <div>
        {users.map(user => {
          const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;
          return <UserCard key={user.id} user={user} avatarUrl={avatarUrl} />;
        })}
      </div>
    )}
  </div>
);
}

export default App;