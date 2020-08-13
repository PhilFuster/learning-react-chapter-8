import React, { useState, useEffect } from 'react';
import { useMountedRef } from './useMountedRef';
import { GraphQLClient } from 'graphql-request';

/**
 * useFetch hook but this time it is for GraphQL and the Github API
 */
const uri = `https://api.github.com/graphql`;
const token = `ece2e23d62ba76a4d2564ff293363f770b8028b8`;
const query = `
  query findRepos($login:String!) {
    user(login:$login) {
      login
      name
      location
      avatar_url:avatarUrl
      repositories(first:100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;
export default function useGitHubUser(login) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const mounted = useMountedRef();
  const client = new GraphQLClient(uri, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  useEffect(() => {
    if (!query) return;
    if (!login) return;
    if (!uri) return;
    setLoading(true);
    client
      .request(query, { login })
      .then(({ user }) => user)
      .then(setData)
      .then(() => setLoading(false))
      .catch((error) => {
        if (!mounted.current) return;
        setError(error);
      });
  }, [login]);
  return { loading, data, error };
}
