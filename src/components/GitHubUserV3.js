import React from 'react';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from './LoadingSpinner';
import Fetch from './Fetch';

/**
 * GitHubUser component using Fetch component.
 * This time making use of the optional custimation from Fetch component.
 */
function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      loadingFallback={<LoadingSpinner />}
      renderSuccess={({ data }) => (
        <>
          <h1>Todo: Render UI for data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
      renderError={(error) => {
        // handle error
        return <p>Something went wrong...{error.message}</p>;
      }}
    ></Fetch>
  );
}

export default GitHubUser;
