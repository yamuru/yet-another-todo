module.exports = {
  admin: {
    UIPath: process.env.ADMIN_UI_PATH || '/admin',
    credentials: {
      username: process.env.ADMIN_CRED_USERNAME || 'Admin',
      email: process.env.ADMIN_CRED_EMAIL || 'nevrikofficial@gmail.com',
      password: process.env.ADMIN_CRED_PASS || 'securepassword',
    },
  },
  db: {
    mongoURI: process.env.DB_MONGO_URI || 'mongodb://localhost/todo-app',
  },
  cookieSecret: process.env.COOKIE_SECRET || 's%3Al3ozSdvQ83TtC5RvJ.CibaQoHtaY0H3QOB1kqR8H2A',
};
