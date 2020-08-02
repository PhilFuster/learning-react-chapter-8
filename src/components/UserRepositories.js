import React, { useState } from 'react';
import Fetch from './Fetch';
import RepoMenu from './RepoMenuV2';

export default function UserRepositories({ login, selectedRepo }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenu repositories={data} login={login} />
      )}
    />
  );
}
