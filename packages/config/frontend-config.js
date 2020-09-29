module.exports = {
  graphqlAPI: process.env.GRAPHQL_API_URL || 'http://0.0.0.0:12345/admin/api',
  nuxt: {
    port: process.env.PORT || 4321,
    host: process.env.HOST || '0.0.0.0',
  },
};
