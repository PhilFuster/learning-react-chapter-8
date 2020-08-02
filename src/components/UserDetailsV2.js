import React, { useState } from 'react';
function UserDetails({ data }) {
  return (
    <div className='githubUser'>
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      {/* Removing UserRepositories so the required fetch requests can be handled in the same place and be done in parallel  */}
      {/* <UserRepositories
        login={data.login}
        onSelect={(repoName) => {
          console.log(`${repoName} selected`);
        }}    />*/}
    </div>
  );
}

export default UserDetails;
