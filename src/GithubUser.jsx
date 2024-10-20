import UseGithubUser from './UseGithubUser'; 

export function GithubUser({ username }) {
  const { data, error, loading } = UseGithubUser(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return null; 
  }

  return (
    <div>
      <img src={data.avatar_url} alt={`${data.login}'s profile picture`} />
      <h1>{data.name}</h1>
      <p>Login: {data.login}</p>
    </div>
  );
}
