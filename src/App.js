import React, { Fragment } from 'react';
import Section from './components/Section/Section';

import PageTitle from './components/PageTitle/PageTitle';
import Title from './components/Title/Title';
import Profile from './components/Profile/Profile';

import { name, tag, location, avatar, stats } from './db/user.json';

function App() {
  return (
    <Fragment>
      <PageTitle text="React Homework. Module 1." />
      <Section>
        <Title text="Task One. Profile." />
        <Profile
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Section>
    </Fragment>
  );
}

export default App;
