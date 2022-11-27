export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Game Of Life - %s',
    title: 'Game Of Life',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['./assets/styles/default.scss'],

  styleResources: { scss: ['./assets/styles/index.scss'] },

  plugins: [],

  // Auto import components
  components: [{ path: '~/components', pathPrefix: false }],

  buildModules: [],

  modules: ['@nuxt/http', '@nuxtjs/style-resources'],

  build: {}
};
