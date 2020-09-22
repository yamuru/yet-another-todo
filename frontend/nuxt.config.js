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
        httpEndpoint: 'http://192.168.0.17:1234/admin/api',
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
    port: 4321,
    host: '0.0.0.0',
  },
  build: {
    corejs: '3',
  },
};
