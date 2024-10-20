import React, { useState } from 'react';
import UseGithubUser from './UseGithubUser'; 

export function GithubUser() {
  const [username, setUsername] = useState('');
  const { data, error, loading, fetchGithubUser } = UseGithubUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGithubUser(username); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Fetch User</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <img src={data.avatar_url} alt={`${data.login}'s profile picture`} />
          <h1>{data.name}</h1>
          <p>Login: {data.login}</p>
        </div>
      )}
    </div>
  );
}
