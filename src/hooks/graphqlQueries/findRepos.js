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
    Authorization: `Bearer e522ebf4c19d908d4d3806b5dfda834328a6b6ba`,
  },
});
export { client, query };
// Example use of client

// client
//   .request(query, { login: 'moontahoe' })
//   .then((results) => JSON.stringify(results, null, 2))
//   .then(console.log)
//   .catch(console.error);
