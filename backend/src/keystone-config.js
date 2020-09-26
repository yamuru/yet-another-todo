const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { createItem, getItems } = require('@keystonejs/server-side-graphql-client');

const { backendConfig: config } = require('@todo-app/config');

const { username, email, password } = config.admin.credentials;

module.exports = {
  adapter: new MongooseAdapter({ mongoUri: config.db.mongoURI }),
  cookieSecret: config.cookieSecret,
  onConnect: async (keystone) => {
    // Creates the admin user at the start if there is no admin
    const admin = await getItems({
      keystone,
      listKey: 'User',
      returnFields: 'email, username',
      where: { email, username },
    });

    if (!admin[0]) {
      await createItem({
        keystone,
        listKey: 'User',
        item: {
          isAdmin: true,
          username,
          email,
          password,
        },
      });
    }
  },
};
