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
    Authorization: `Bearer 93271a917df330bd883ea730afa7a6f0d30f25c8`,
  },
});

client
  .request(query, { login: 'moontahoe' })
  .then((results) => JSON.stringify(results, null, 2))
  .then(console.log)
  .catch(console.error);
