import React, { Fragment } from 'react';
import Section from './components/Section/Section';
import PageTitle from './components/PageTitle/PageTitle';
import Title from './components/Title/Title';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

import { name, tag, location, avatar, stats } from './db/user.json';
import statisticalData from './db/statistical-data.json';

function App() {
  return (
    <Fragment>
      <PageTitle text="React Homework. Module 1." />
      <Section>
        <Title text="Task One. Social Media Profile." />
        <Profile
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Section>
      <Section type="highlighted">
        <Title text="Task Two. Statistics." />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </Section>
    </Fragment>
  );
}

export default App;
