const { Text, Checkbox, Password } = require('@keystonejs/fields');

module.exports = {
  access: {
    auth: true,
    create: true,
  },
  fields: {
    isAdmin: {
      type: Checkbox,
      defaultValue: false,
    },
    username: {
      type: Text,
      isRequired: true,
    },
    email: {
      access: {
        create: true,
        read: ({ existingItem, authentication: { item } }) =>
          item.isAdmin || existingItem.id === item.id,
        update: ({ existingItem, authentication: { item } }) =>
          item.isAdmin || existingItem.id === item.id,
      },
      type: Text,
      isRequired: true,
      isUnique: true,
    },
    password: {
      access: {
        create: true,
        read: ({ authentication }) => authentication.item.isAdmin,
        update: ({ existingItem, authentication: { item } }) =>
          item.isAdmin || existingItem.id === item.id,
      },
      type: Password,
      isRequired: true,
    },
  },
};
