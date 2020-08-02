import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import GitHubUser from './components/GitHubUserV2';
import UserRepositories from './components/UserRepositoriesV2';
import RepositoryReadme from './components/RepositoryReadme';
import './App.css';

function App() {
  const [login, setLogin] = useState();
  const [repo, setRepo] = useState();
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      {login && <GitHubUser login={login} />}
      {login && (
        <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      )}
      {login && repo && <RepositoryReadme login={login} repo={repo} />}
    </>
  );
}

export default App;
