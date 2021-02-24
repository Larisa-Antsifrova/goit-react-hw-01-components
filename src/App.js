import React, { Fragment } from 'react';
import Container from './components/Container/Container';

import Title from './components/Title/Title';
import Profile from './components/Profile/Profile';

import { name, tag, location, avatar, stats } from './db/user.json';

function App() {
  return (
    <Fragment>
      <Container>
        <Title text="React Homework. Module 1." />
        <Profile
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Container>
    </Fragment>
  );
}

export default App;
