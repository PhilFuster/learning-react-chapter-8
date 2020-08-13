import React from 'react';
import useGraphQL from '../hooks/useGitHubUser';
import LoadingSpinner from './LoadingSpinner';

function FetchGraphQL({
  uri,
  token,
  query,
  variables,
  login,
  renderSuccess,
  loadingFallback = <LoadingSpinner></LoadingSpinner>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { loading, data, error } = useGraphQL(
    uri,
    token,
    login,
    query,
    variables
  );
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}
export default FetchGraphQL;
