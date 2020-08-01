import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import GitHubUser from './components/GitHubUserV2';
import './App.css';

function App() {
  const [login, setLogin] = useState('PhilFuster');
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </>
  );
}

export default App;
