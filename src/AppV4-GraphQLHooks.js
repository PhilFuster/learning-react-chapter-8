import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import UserRepositories from './components/UserRepositoriesV2';
import RepositoryReadme from './components/RepositoryReadme';
import List from './components/ListV2';
import './App.css';
import UserDetails from './components/UserDetailsV3';
import FetchGraphQL from './components/FetchGraphQL';
import useGitHubUser from './hooks/useGitHubUser';
import LoadingSpinner from './components/LoadingSpinner';
import { render } from '@testing-library/react';
import { useMountedRef } from './hooks/useMountedRef';
/**
 * This is a super rough attempt at working with GraphQL.
 * I did not implement much of the state handling for promises with GraphQL.
 * I may come back to this later and expand on it. The book went over all of the state handling using fetch requests, so I am sure I will be able to extrapolate from those examples, what needs to be done here.
 */

function App() {
  const [login, setLogin] = useState('PhilFuster');
  const { loading, data, error } = useGitHubUser(login);
  const [userData, setUserData] = useState();
  const mounted = useMountedRef();
  const handleSearch = (newLogin) => {
    if (newLogin === login && newLogin) return;
    if (!mounted.current) return;
    setLogin(newLogin);
    console.log(`setting login`);
  };
  useEffect(() => {
    if (!data) return;
    setUserData(data);
  }, [data]);
  if (!login) return <SearchForm value={login} onSearch={handleSearch} />;
  if (loading) return <LoadingSpinner />;
  if (error) return (error) => <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return;
  return (
    <>
      <SearchForm value={login} onSearch={handleSearch} />
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
