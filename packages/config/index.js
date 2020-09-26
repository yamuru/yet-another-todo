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

module.exports = {
  backendConfig,
};
