const { Text, Checkbox } = require('@keystonejs/fields');

module.exports = {
  fields: {
    task: {
      type: Text,
      isRequired: true,
    },
    isDone: {
      type: Checkbox,
      defaultValue: false,
    },
  },
};
