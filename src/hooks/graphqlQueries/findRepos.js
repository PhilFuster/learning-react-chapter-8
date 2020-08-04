import { GraphQLClient } from 'graphql-request';

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
const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer 5da257beabae27b8c501105b8b372bb84b29b3b4`,
  },
});
export { client, query };
// Example use of client

// client
//   .request(query, { login: 'moontahoe' })
//   .then((results) => JSON.stringify(results, null, 2))
//   .then(console.log)
//   .catch(console.error);
