import React, { useEffect, useState } from 'react';
import api from './services/api';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users').then(reponse => {
      setUsers(reponse.data);
    });
  }, []);

  return (
    <div className="App">
      { users.map(user => <User user={user} key={user.email} />) }
    </div>
  );
}

export default App;
