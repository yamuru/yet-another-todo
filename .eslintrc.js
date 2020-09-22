module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:vue/base'],
  plugins: ['prettier', 'vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'space-before-function-paren': 0,
    'implicit-arrow-linebreak': 'off',

    // [frontend] @nuxtjs/vuetify installed already,
    // but this requires vuetify to be specified in package.json
    'import/no-extraneous-dependencies': 'off',

    // [frontend] doesn't understand '@/components/somecomponent' with this rule
    'import/no-unresolved': 'off',

    'prettier/prettier': 'error',
  },
};
