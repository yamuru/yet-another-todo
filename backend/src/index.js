const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

const { backendConfig: config } = require('@todo-app/config');
const keystoneConfig = require('./keystone-config');

const userSchema = require('./schema/User');
const todoSchema = require('./schema/Todo');

const keystone = new Keystone(keystoneConfig);

keystone.createList('User', userSchema);
keystone.createList('Todo', todoSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  configureExpress: (app) => {
    app.set('trust proxy', true);
  },
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      adminPath: config.admin.UIPath,
      authStrategy,
    }),
  ],
};
