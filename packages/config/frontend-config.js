module.exports = {
  graphqlAPI: process.env.GRAPHQL_API_URL || 'http://192.168.0.17:1234/admin/api',
  nuxt: {
    port: process.env.CLIENT_PORT || 4321,
    host: process.env.CLIENT_HOST || '0.0.0.0',
  },
};
