import React, { useEffect } from 'react';
import { useIterator } from '../hooks/useIterator';

export default function RepoMenu({
  repositories,
  selected,
  onSelect = (f) => f,
}) {
  const [{ name }, previous, next] = useIterator(
    repositories,
    selected ? repositories.findIndex((repo) => repo.name === selected) : null
  );
  useEffect(() => {
    onSelect(name);
  });
  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      {/* Removing RepositoryReadme from RepoMenu so it can focus on rendering the repo menu
          and to perform all of these fetch requests in parallel rather than in sequence
      */}
      {/* <RepositoryReadme login={login} repo={name} /> */}
    </>
  );
}
