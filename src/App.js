import React from 'react';
import Section from './components/Section/Section';
import PageTitle from './components/PageTitle/PageTitle';
import Title from './components/Title/Title';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import { name, tag, location, avatar, stats } from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

function App() {
  return (
    <>
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
        {/* Statistics component with title prop */}
        <Statistics title="Upload stats" stats={statisticalData} />
        {/* Statistics component without title prop */}
        <Statistics stats={statisticalData} />
      </Section>
      <Section>
        <Title text="Task Three. Friends List." />
        <FriendList friends={friends} />
      </Section>
      <Section type="highlighted">
        <Title text="Task Four. Transactions History." />
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}

export default App;
