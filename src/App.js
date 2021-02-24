import React from 'react';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';

import { name, tag, location, avatar, stats } from './db/user.json';

function App() {
  return (
    <div>
      <Container>
        <h1>React Homework. Module 1.</h1>
        <Profile
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Container>
    </div>
  );
}

export default App;
