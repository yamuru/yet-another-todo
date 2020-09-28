const backendConfig = {
  port: '1234',
  admin: {
    UIPath: '/admin',
    credentials: {
      username: 'Admin',
      email: 'nevrikofficial@gmail.com',
      password: 'securepassword',
    },
  },
  db: {
    mongoURI: 'mongodb://localhost/todo-app',
  },
  cookieSecret: 's%3Al3ozSdvQ83TtC5RvJ.CibaQoHtaY0H3QOB1kqR8H2A',
};

const frontendConfig = {
  graphqlAPI: 'http://192.168.0.17:1234/admin/api',
  nuxt: {
    port: 4321,
    host: '0.0.0.0',
  },
};

module.exports = {
  backendConfig,
  frontendConfig,
};
