import React, { useState } from 'react';
import Fetch from './Fetch';
import RepoMenu from './RepoMenuV3';

export default function UserRepositories({ login, repo, onSelect = (f) => f }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      // Refactoring how RepoMenu from renderSuccess of UserRepositories works so all requests
      // can be outside in parallel rather in sequence, waiting for one request to finish after the other.
      // renderSuccess={({ data }) => (
      //   <RepoMenu repositories={data} login={login} />
      // )}
      renderSuccess={({ data }) => (
        <RepoMenu repositories={data} selected={repo} onSelect={onSelect} />
      )}
    />
  );
}
