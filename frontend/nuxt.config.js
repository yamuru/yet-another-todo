import colors from 'vuetify/es5/util/colors';

export default {
  head: {
    titleTemplate: 'Yet Another Todo',
    title: 'Yet Another Todo',
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
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
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
