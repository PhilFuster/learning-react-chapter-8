import React from 'react';
import Fetch from './Fetch';
import UserDetails from './UserDetails';

/**
 * GitHubUser component using Fetch component
 */
function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    ></Fetch>
  );
}

export default GitHubUser;
