export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Finance.co',
    htmlAttrs: {
      lang: 'pt-br',
      class: 'light-style layout-menu-fixed',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap' },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript"
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/vendor/fonts/boxicons.css',
    '~/assets/vendor/css/theme-default.css',
    '~/assets/vendor/css/core.css',
    '~/assets/css/demo.css',
  ],

  script: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue.picker.js', mode: 'client' },
    { src: '~/plugins/vue.toasts', mode: 'client' },
    { src: '~/plugins/dayjs.format' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8080/api/',
  },

  auth: {
    localStorage: false,
    strategies: {
      local: {
        token: {
          required: false,
          type: 'Bearer'
        },
        endpoints: {
          login: { url: 'account/login', method: 'POST', propertyName: 'token' },
          user: { url: 'account/me', method: 'GET', propertyName: 'user' },
          logout: false
        }
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      home: '/dashboard'
    }
  },

  env: {
    baseUrl: 'http://localhost:8080', 
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
