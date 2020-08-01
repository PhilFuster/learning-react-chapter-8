import React, { memo, useState } from 'react';
import List from './components/List';
import './App.css';
import faker from 'faker';

/**
 * Using faker library to generate 5000 fake entries
 * Atm this will render all 5000 entries at once which can be a huge performance issue
 * For most if not all screens 5000 has no chance of fitting on the screen all at once.
 * So there is no need to render all of these at the same time. That is where the concept
 * windowing/virtualization comes into play. In next example you shall see
 */
const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));
function App() {
  const renderItem = (item) => (
    <div style={{ display: 'flex' }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );
  return <List data={bigList} renderItem={renderItem} />;
}

export default App;
