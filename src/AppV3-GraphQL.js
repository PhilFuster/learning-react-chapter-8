import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import GitHubUser from './components/GitHubUserV2';
import UserRepositories from './components/UserRepositoriesV2';
import RepositoryReadme from './components/RepositoryReadme';
import { client, query } from './hooks/graphqlQueries/findRepos';
import List from './components/ListV2';
import './App.css';
import UserDetails from './components/UserDetailsV3';
/**
 * This is a super rough attempt at working with GraphQL.
 * I did not implement much of the state handling for promises with GraphQL.
 * I may come back to this later and expand on it. The book went over all of the state handling using fetch requests, so I am sure I will be able to extrapolate from those examples, what needs to be done here.
 */
function App() {
  const [login, setLogin] = useState('PhilFuster');
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!login) return;
    client
      .request(query, { login })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error);
  }, [client, query, login]);
  if (!userData) return <p>loading...</p>;
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <UserDetails {...userData} />
      <p>{userData.repositories.totalCount} - repos</p>
      <List
        data={userData.repositories.nodes}
        renderItem={(repo) => <span>{repo.name}</span>}
      />
    </>
  );
}

export default App;
