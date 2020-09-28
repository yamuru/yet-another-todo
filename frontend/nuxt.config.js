const { frontendConfig: config } = require('@todo-app/config');

export default {
  head: {
    titleTemplate: 'Yet Another Todo %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Todo App',
      },
    ],
  },
  srcDir: './src',
  loading: { color: '#fff' },
  modules: ['@nuxtjs/apollo'],
  buildModules: ['@nuxtjs/vuetify'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: config.graphqlAPI,
      },
    },
  },
  vuetify: {
    customVariables: ['~/assets/colors.scss'],
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
        },
      },
    },
  },
  server: {
    port: config.nuxt.port,
    host: config.nuxt.host,
  },
  build: {
    corejs: '3',
  },
};
