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
};

module.exports = {
  backendConfig,
};
