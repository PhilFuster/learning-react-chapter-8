import React from 'react';
import './App.css';
import { FixedSizeList } from 'react-window';
import faker from 'faker';

// purpose of react-window is to reap performance benefits from
// windowing/virtualization. It allows us to scroll very large,
// sometimes infinite lists of data without crashing the browser.
// very popular to implement that kind of pattern, thus react built
// their own components to handle that. ie react-window
const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));
function App() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: 'flex' } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );
  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}

export default App;
