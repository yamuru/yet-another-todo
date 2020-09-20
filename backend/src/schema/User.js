const { Text, Relationship, Checkbox, Password } = require('@keystonejs/fields');

module.exports = {
  access: {
    auth: true,
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
      access: ({ existingItem, authentication: { item } }) =>
        item.isAdmin || existingItem.id === item.id,
      type: Text,
      isRequired: true,
      isUnique: true,
    },
    password: {
      access: {
        read: ({ authentication }) => authentication.item.isAdmin,
        update: ({ existingItem, authentication: { item } }) =>
          item.isAdmin || existingItem.id === item.id,
      },
      type: Password,
      isRequired: true,
    },
    todoList: {
      access: ({ existingItem, authentication: { item } }) =>
        item.isAdmin || existingItem.id === item.id,
      type: Relationship,
      ref: 'Todo',
      many: true,
    },
  },
};
