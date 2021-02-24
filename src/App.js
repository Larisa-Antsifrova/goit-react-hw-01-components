import React from 'react';
import Profile from './components/Profile/Profile';

import { name, tag, location, avatar, stats } from './db/user.json';

function App() {
  return (
    <div>
      <h1>Hello, I am future Homework!</h1>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
}

export default App;
