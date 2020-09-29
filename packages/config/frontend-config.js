module.exports = {
  graphqlAPI: process.env.GRAPHQL_API_URL || 'http://172.17.112.250:1234/admin/api',
  nuxt: {
    port: process.env.PORT || 4321,
    host: process.env.CLIENT_HOST || '0.0.0.0',
  },
};
