const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    task: {
      type: Text,
      isRequired: true,
    },
    owner: {
      type: Relationship,
      isRequired: true,
      ref: 'User',
      many: false,
    },
  },
};
